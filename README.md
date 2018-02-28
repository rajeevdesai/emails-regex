# emails-regex [![Build Status](https://travis-ci.org/rajeevdesai/emails-regex.svg?branch=master)](https://travis-ci.org/rajeevdesai/emails-regex) [![npm](https://img.shields.io/npm/dt/emails-regex.svg)](https://www.npmjs.com/package/emails-regex)
Emails Regex Pattern returns a regex that matches Emails.

Use it for picking up Emails's from text.

## Install

```
$ npm install emails-regex
```

## Usage

```js
const emailsRegex = require('emails-regex');

// Contains a emails
'Contact us at support@generic.com'.match(emailsRegex());
// => ['support@generic.com']

'The founding team members are ravi@abc.in & kishan@abc.in'.match(emailsRegex());
// => ['ravi@abc.com', kishan@abc.com]

//Doesn't contain emails
'Contact us at support@generic'.match(emailsRegex());
// => []
```

## See Also
- [sindresorhus/email-regex](https://github.com/sindresorhus/email-regex)
- [regexhq/regex-email](https://github.com/regexhq/regex-email)
- [You shouldn't use this for validating emails.][davidcelis] Use it only for hinting to the user.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[davidcelis]: http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/
