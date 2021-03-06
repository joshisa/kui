# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.24.0 (2019-03-19)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** a few more small tweaks to screenshot UI ([a267d42](https://github.com/IBM/kui/commit/a267d42)), closes [#892](https://github.com/IBM/kui/issues/892)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** clicking on current theme, editor loses theme ([4eff85f](https://github.com/IBM/kui/commit/4eff85f)), closes [#799](https://github.com/IBM/kui/issues/799)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reduce size of about icons ([d0a0ccc](https://github.com/IBM/kui/commit/d0a0ccc)), closes [#758](https://github.com/IBM/kui/issues/758)
* **plugins/plugin-core-support:** reduce use of raw require in screenshot ([346ab5a](https://github.com/IBM/kui/commit/346ab5a)), closes [#895](https://github.com/IBM/kui/issues/895)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** repl screenshot button should snap tightly ([34e66e5](https://github.com/IBM/kui/commit/34e66e5)), closes [#791](https://github.com/IBM/kui/issues/791)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* paste in editor results in loss of editor focus ([f4ef055](https://github.com/IBM/kui/commit/f4ef055)), closes [#847](https://github.com/IBM/kui/issues/847)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* refine screenshot squishing behavior ([9a08eb7](https://github.com/IBM/kui/commit/9a08eb7)), closes [#858](https://github.com/IBM/kui/issues/858)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* resolve multiple issues with popups ([09c252f](https://github.com/IBM/kui/commit/09c252f)), closes [#872](https://github.com/IBM/kui/issues/872)
* screenshot UI improvements ([0f4e970](https://github.com/IBM/kui/commit/0f4e970)), closes [#890](https://github.com/IBM/kui/issues/890)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* --ui should open repl-free windows ([088c24f](https://github.com/IBM/kui/commit/088c24f)), closes [#830](https://github.com/IBM/kui/issues/830)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.23.0 (2019-03-19)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** a few more small tweaks to screenshot UI ([a267d42](https://github.com/IBM/kui/commit/a267d42)), closes [#892](https://github.com/IBM/kui/issues/892)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** clicking on current theme, editor loses theme ([4eff85f](https://github.com/IBM/kui/commit/4eff85f)), closes [#799](https://github.com/IBM/kui/issues/799)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reduce size of about icons ([d0a0ccc](https://github.com/IBM/kui/commit/d0a0ccc)), closes [#758](https://github.com/IBM/kui/issues/758)
* **plugins/plugin-core-support:** reduce use of raw require in screenshot ([346ab5a](https://github.com/IBM/kui/commit/346ab5a)), closes [#895](https://github.com/IBM/kui/issues/895)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** repl screenshot button should snap tightly ([34e66e5](https://github.com/IBM/kui/commit/34e66e5)), closes [#791](https://github.com/IBM/kui/issues/791)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* paste in editor results in loss of editor focus ([f4ef055](https://github.com/IBM/kui/commit/f4ef055)), closes [#847](https://github.com/IBM/kui/issues/847)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* refine screenshot squishing behavior ([9a08eb7](https://github.com/IBM/kui/commit/9a08eb7)), closes [#858](https://github.com/IBM/kui/issues/858)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* resolve multiple issues with popups ([09c252f](https://github.com/IBM/kui/commit/09c252f)), closes [#872](https://github.com/IBM/kui/issues/872)
* screenshot UI improvements ([0f4e970](https://github.com/IBM/kui/commit/0f4e970)), closes [#890](https://github.com/IBM/kui/issues/890)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* --ui should open repl-free windows ([088c24f](https://github.com/IBM/kui/commit/088c24f)), closes [#830](https://github.com/IBM/kui/issues/830)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.22.0 (2019-03-10)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.21.0 (2019-03-10)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.20.0 (2019-03-10)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.19.0 (2019-03-09)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.18.0 (2019-03-08)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-core-support:** text search stripe versus dark mode ([befb53c](https://github.com/IBM/kui/commit/befb53c)), closes [#657](https://github.com/IBM/kui/issues/657)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.17.0 (2019-03-06)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)





# 0.16.0 (2019-03-06)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)





# 0.15.0 (2019-03-06)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** clicking again on a theme results in no theme ([14f28ca](https://github.com/IBM/kui/commit/14f28ca)), closes [#630](https://github.com/IBM/kui/issues/630)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** help command should not require proxy ([2ffb2f8](https://github.com/IBM/kui/commit/2ffb2f8)), closes [#622](https://github.com/IBM/kui/issues/622)
* **plugins/plugin-core-support:** reloading with multiple windows results in no theme ([61b722e](https://github.com/IBM/kui/commit/61b722e)), closes [#640](https://github.com/IBM/kui/issues/640)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)





# 0.14.0 (2019-02-28)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.13.0 (2019-02-28)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.12.0 (2019-02-27)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** add missing deps to package.json ([1eb8704](https://github.com/IBM/kui/commit/1eb8704)), closes [#563](https://github.com/IBM/kui/issues/563)
* **plugins/plugin-core-support:** dark mode fixes for about ([fbd75e2](https://github.com/IBM/kui/commit/fbd75e2)), closes [#540](https://github.com/IBM/kui/issues/540)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.11.0 (2019-02-22)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.10.0 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.9.0 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





## 0.8.1 (2019-02-20)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.8.0 (2019-02-20)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.7.0 (2019-02-19)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.6.0 (2019-02-13)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.5.0 (2019-02-04)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.4.0 (2019-02-03)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.3.0 (2019-02-03)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.2.0 (2019-02-03)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)





# 0.1.0 (2019-02-03)


### Bug Fixes

* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/starpit/kui/commit/d1b4e75)), closes [#329](https://github.com/starpit/kui/issues/329)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/starpit/kui/commit/d6f474d)), closes [#355](https://github.com/starpit/kui/issues/355)


### Features

* kuiproxy ([530c278](https://github.com/starpit/kui/commit/530c278)), closes [#266](https://github.com/starpit/kui/issues/266) [#278](https://github.com/starpit/kui/issues/278) [#279](https://github.com/starpit/kui/issues/279)
