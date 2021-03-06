/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Debug from 'debug'
const debug = Debug('k8s/util/log-parser')

import { prettyPrintTime } from '@kui-shell/core/webapp/util/time'

/**
 * Squash runs of the same log entry
 *
 */
const squashLogRuns = (isNotCloudLens: boolean, options: IOptions) => (soFar, logLine) => {
  let current
  if (!isNotCloudLens) {
    const columns = logLine.split(/\s+/)
    const logType = columns[0]
    const timestamp = columns[1]
    const origin = columns[3]
    const rawRest = columns.slice(4).join(' ')
    const runLength = 1

    let rest = rawRest
    try {
      if (options.asJSON) {
        rest = JSON.parse(rawRest)
      }
    } catch (err) {
      console.error(err)
    }
    current = { logType, timestamp, origin, rest, runLength }

  } else {
    try {
      const match = logLine.match(/^([^\s]+)\s+({.*})\s*$/)
      if (match) {
        const origin = match[1]
        const record = match[2]
        current = {
          logType: 'pair',
          origin,
          rest: options.asJSON ? JSON.parse(record) : record,
          runLength: 1
        }
      } else {
        current = { logType: 'raw', rest: logLine, runLength: 1 }
      }
    } catch (err) {
      current = { logType: 'raw', rest: logLine, runLength: 1 }
    }
  }

  const previous = soFar[soFar.length - 1]

  if (previous &&
      previous.logType && previous.logType === current.logType &&
      previous.origin === current.origin &&
      previous.rest === current.rest) {
    // squashable!
    previous.runLength++
  } else {
    // not squashable!
    soFar.push(current)
  }

  return soFar
}

interface IOptions {
  asHTML?: boolean
  asJSON?: boolean
}

interface IZaprEntry {
  timestamp: string
  logType: string
  provider: string
  origin: string
  rest: string
  runLength?: number
}

/**
 * sigh...
 *
 * Array.prorotype.findIndex does not accept a start index;
 * and Array.prototype.indexOf does not accept a pattern
 *
 */
const findIndex = (A, pattern, startIdx) => {
  for (let idx = startIdx; idx < A.length; idx++) {
    if (A[idx].match(pattern)) {
      return idx
    }
  }
  return -1
}

/**
 * Parser for zapr-formatted logs
 *
 * @return undefined if we don't have any log entries
 *
 */
const parseZapr = (raw: string): Array<IZaprEntry> => {
  const pattern = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+Z)\s+(DEBUG|INFO|ERROR)\s+([^\s]+)\s+([^\s]+)\s+(.*)$/m

  const records = raw.split(pattern).filter(x => x !== '\n')
  const lines = []

  let idx = 0
  while (true) {
    const nextIdx = findIndex(records, /(DEBUG|INFO|ERROR)/, idx)
    if (nextIdx >= idx + 1) {
      const startIdx = nextIdx - 1
      for (let preIdx = idx; preIdx < startIdx; preIdx++) {
        const maybe = records[preIdx].match(/^\n?(\d{4}\/\d{2}\/\d{2}\s+\d{2}:\d{2}:\d{2})\s+(.*)\n$/)
        if (maybe) {
          lines.push({
            timestamp: maybe[1],
            logType: 'INFO',
            provider: '',
            origin: '',
            rest: maybe[2]
          })
        } else {
          lines.push({
            timestamp: '',
            logType: 'INFO',
            provider: '',
            origin: '',
            rest: records[preIdx].replace(/^\n(.*)\n$/, '$1')
          })
        }
      }
      lines.push({
        timestamp: records[startIdx],
        logType: records[startIdx + 1],
        provider: records[startIdx + 2],
        origin: records[startIdx + 3],
        rest: records[startIdx + 4]
      })

      idx = startIdx + 5
    } else {
      break
    }
  }

  // return undefined if we don't have any log entries
  debug('zapr?', lines.length > 0, lines)
  return lines.length > 0 && lines
}

/**
 * Parser for CloudLens-formatted logs
 *
 * @return undefined if we don't have any log entries
 *
 */
const parseCloudLens = (raw: string, options: IOptions): Array<any> => {
  const pattern = /^(?=[IEF][0-9]+)/m
  const linesByCloudLens = raw.split(pattern)

  return linesByCloudLens
    .slice(Math.max(0, linesByCloudLens.length - 1000)) // display no more than 1000 lines
    .filter(x => x)
    .filter(x => x.indexOf('Watch close') < 0)
    .reverse()
    .reduce(squashLogRuns(false, options), [])
}

/**
 * Parser for istio logs
 *
 */
const parseIstio = (raw: string): Array<IZaprEntry> => {
  // [2019-02-22 15:22:54.048][16][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-telemetry.istio-system.svc.cluster.local during init
  // [2019-02-22 15:22:52.882][16][info][main] external/envoy/source/server/server.cc:190] initializing epoch 0 (hot restart version=10.200.16384.256.options=capacity=16384, num_slots=8209 hash=228984379728933363 size=4882536)
  const pattern = /^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+)\]\[(\d+)\]\[(.*)\]\[(.*)\]\s+(.*:\d+)\]\s+(.*)$/mg

  // 2019-02-22T15:22:52.837196Z     info    Monitored certs: []envoy.CertSource{envoy.CertSource{Directory:"/etc/certs/", Files:[]string{"cert-chain.pem", "key.pem", "root-cert.pem"}}}
  const pattern2Split = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z)/
  const pattern2Rest = /^\s+([^\s]+)\s+([\s\S]*)/
  const rest = raw.replace(pattern, '')
  const lines2 = rest
    .split(pattern2Split)
    .slice(1)
    .reduce((lines, line, idx, A) => {
      if (idx % 2 === 0) {
        const restOfLine = A[idx + 1].match(pattern2Rest) || A[idx + 1]
        debug('rest', A[idx + 1], restOfLine)
        lines.push({
          timestamp: prettyPrintTime(A[idx]),
          logType: restOfLine[1],
          rest: restOfLine[2].replace(/[\n\r]*$/, '')
        })
      }

      return lines
    }, []).filter(x => x !== '\n')
  debug('lines2', lines2)

  const records = raw.split(pattern).slice(1).filter(x => x !== '\n')
  const lines = records.reduce((lines, line, idx, A) => {
    if (idx % 6 === 0) {
      lines.push({
        timestamp: prettyPrintTime(A[idx]),
        logType: A[idx + 2],
        provider: A[idx + 3],
        origin: A[idx + 4],
        rest: A[idx + 5] && A[idx + 5].trim()
      })
    }

    return lines
  }, [])
  debug('lines', lines)

  return lines.concat(lines2).sort((a,b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  })
}

/**
 * Format the kubectl access logs
 *
 */
export const formatLogs = (raw: string, options: IOptions = { asHTML: true }) => {
  const logEntries = parseZapr(raw) || parseIstio(raw) || parseCloudLens(raw, options)
  debug('logEntries', logEntries)

  if (!options.asHTML) {
    return logEntries
  } else {
    const container = document.createElement('div')
    container.classList.add('log-lines')
    container.classList.add('fixed-table-layout')

    logEntries.forEach(({ logType = '', timestamp = '', origin = '', rest, runLength = 1 }) => {
      // dom for the log line
      const logLine = document.createElement('div')
      logLine.classList.add('log-line')
      container.appendChild(logLine)

      // stdout or stderr?
      if (logType.match(/^I/) || logType.match(/^INFO$/)) {
        logLine.classList.add('logged-to-stdout')
      } else if (logType.match(/^[EF]/) || logType.match(/^(ERROR|WARN)/)) { // errors or failures
        logLine.classList.add('logged-to-stderr')
      }

      // timestamp rendering
      const timestampDom = document.createElement('div')
      timestampDom.className = 'log-field log-date entity-name-group hljs-attribute'
      if (typeof timestamp === 'string') {
        timestampDom.innerText = timestamp
      } else {
        timestampDom.appendChild(timestamp)
      }
      logLine.appendChild(timestampDom)

      // origin, e.g. filename and line number, rendering
      const originDom = document.createElement('div')
      originDom.className = 'entity-name'
      originDom.innerText = origin ? origin.replace(/]$/, '') : ''
      timestampDom.appendChild(originDom)

      // run length rendering
      if (runLength > 1) {
        const runLengthDom = document.createElement('div')
        runLengthDom.innerText = `(${runLength} times)`
        runLengthDom.classList.add('small-top-pad')
        runLengthDom.classList.add('red-text')
        timestampDom.appendChild(runLengthDom)
      }

      // log message rendering
      const restDom = document.createElement('div')
      restDom.className = 'log-field log-message slightly-smaller-text'
      if (typeof rest === 'object') {
        const pre = document.createElement('pre')
        const code = document.createElement('code')
        code.innerText = JSON.stringify(rest)
        pre.appendChild(code)
        restDom.appendChild(pre)
      } else {
        const pre = document.createElement('pre')
        const code = document.createElement('code')
        code.innerText = rest
        pre.appendChild(code)
        restDom.appendChild(pre)
      }
      logLine.appendChild(restDom)
    })

    const wrapper = document.createElement('div')
    wrapper.classList.add('padding-content')
    wrapper.classList.add('scrollable')
    wrapper.classList.add('scrollable-auto')
    wrapper.classList.add('monospace')
    wrapper.classList.add('smaller-text')
    wrapper.appendChild(container)

    return wrapper
  }
}
