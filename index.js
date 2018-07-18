'use strict';

const re = '\\w[\\w.+-]*\\w\\@[\\w-]+(?:\\.[\\w]+)+';

module.exports = options => {
  options = options || {};
  return options.exactMatch ? new RegExp(`^${re}$`) : new RegExp(re, 'g');
};
