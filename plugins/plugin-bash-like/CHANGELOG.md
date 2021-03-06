# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.13.0 (2019-03-19)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.12.0 (2019-03-19)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.11.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.10.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.9.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.8.0 (2019-03-09)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.7.0 (2019-03-08)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.6.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.5.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.4.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.3.0 (2019-02-28)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.2.0 (2019-02-28)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.1.0 (2019-02-27)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





## 0.0.18 (2019-02-22)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.17 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.14 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.13 (2019-02-20)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.12 (2019-02-20)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.11 (2019-02-19)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.10 (2019-02-13)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.7 (2019-02-04)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.5 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.4 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.3 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.2 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/starpit/kui/commit/d6f474d)), closes [#355](https://github.com/starpit/kui/issues/355)
