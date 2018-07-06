'use strict';

const re = '[\\w][\\w.+-]*[\\w\\d]\\@[\\w-]+(\\.[\\w]+)+';

module.exports = options => {
  options = options || {};
  return options.exactMatch ? new RegExp(`^${re}$`) : new RegExp(re, 'g');
};
