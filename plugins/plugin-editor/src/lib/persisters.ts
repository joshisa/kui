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
const debug = Debug('plugins/editor/persisters')

import { readFile, writeFile } from 'fs'
import globalEventBus from '@kui-shell/core/core/events'

import strings from '../i18n/strings'

/**
 * Logic for saving and reverting
 *
 */
export const persisters = {
  // persisters for local files
  files: {
    getCode: entity => entity,
    saveString: strings.saveLocalFile,
    save: (entity, editor) => new Promise((resolve, reject) => {
      writeFile(entity.filepath, editor.getValue(), err => {
        if (err) {
          reject(err)
        } else {
          resolve(entity)
        }
      })
    }),
    revert: (entity) => new Promise((resolve, reject) => {
      readFile(entity.filepath, (err, data) => {
        if (err) {
          reject(err)
        } else {
          entity.exec.code = data.toString()
          resolve(entity)
        }
      })
    })
  }
}

/**
 * Save the given entity
 *
 */
export const save = ({ getEntity, editor, eventBus }) => {
  const entityRightNow = getEntity()
  const mode = (entityRightNow.persister && entityRightNow.persister.saveString) || strings.save

  return {
    mode,
    actAsButton: true,
    // fontawesome: 'fas fa-cloud-upload-alt',
    direct: () => {
      const entity = getEntity()
      const persister = entity.persister
      debug('persister', persister, entity)
      const { save } = entity.persister

      // transfer the latest code from the editor into the entity
      entity.exec.code = editor.getValue()

      return save(entity, editor)
        .then(entity => {
          entity.persister = persister
          eventBus.emit('/editor/save', entity, { event: 'save' })
          globalEventBus.emit('/editor/save', entity, { event: 'save' })
          return entity
        })
    }
  }
}

/**
 * Revert to the currently deployed version
 *
 */
export const revert = ({ getEntity, editor, eventBus }) => ({
  mode: strings.revert,
  actAsButton: true,
  // fontawesome: 'fas fa-cloud-download-alt',
  // fontawesome: 'fas fa-sync-alt',
  direct: () => {
    const entity = getEntity()
    const persister = entity.persister

    if (persister.revert) {
      return persister.revert(entity, { editor, eventBus })
        .then(entity => {
          entity.persister = persister
          editor.updateText(entity)
          eventBus.emit('/editor/save', entity, { event: 'revert' })
        })
        .then(() => true)
    } else {
      debug('no registered reverter')
    }
  }
})
