#!/usr/bin/env node
'use strict';
const meow = require('meow');
const defaultBrowser = require('default-browser');

meow(`
	Example
	  $ default-browser
	  Safari
`);

defaultBrowser().then(data => console.log(data.name));
