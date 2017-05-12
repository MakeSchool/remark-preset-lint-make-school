'use strict';

module.exports.plugins = [
  require('remark-lint'),

  require('remark-lint-final-newline'),

  [require('blockquote-indentation'), 2],

  require('list-item-bullet-indent'),
  [require('list-item-indent'), "space"],
  require('list-item-spacing'),
  [require('ordered-list-marker-style'), "."],
  [require('ordered-list-marker-value'), "ordered"],
  [require('unordered-list-marker-style'), "-"],

  [require('heading-style'), "atx"],
  [require('maximum-heading-length'), 56],
  require('no-duplicate-headings'),
  require('no-emphasis-as-heading'),
  require('no-heading-content-indent'),
  require('no-heading-indent'),
  require('no-heading-like-paragraph'),
  require('no-multiple-toplevel-headings'),

  [require('link-title-style'), "\""],
  require('no-empty-url'),
  require('no-literal-urls'),

  [require('emphasis-marker'), "_"],
  [require('strong-marker'), "*"],
  require('no-inline-padding'),

  [require('code-block-style'), "fenced"],
  [require('fenced-code-marker'), "`"],

  require('no-consecutive-blank-lines'),
  [require('no-missing-blank-lines', { "exceptTightLists": true }],
  require('no-html'),
  require('no-tabs')
];
