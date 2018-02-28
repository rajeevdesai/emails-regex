# emails-regex [![Build Status](https://travis-ci.org/rajeevdesai/emails-regex.svg?branch=master)](https://travis-ci.org/rajeevdesai/emails-regex)
Emails Regex Pattern returns a regex that matches Virtual Payment Address (Emails).
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

## License
[MIT](https://tldrlegal.com/license/mit-license)
