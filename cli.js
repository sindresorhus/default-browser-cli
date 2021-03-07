#!/usr/bin/env node
import meow from 'meow';
import defaultBrowser from 'default-browser';

meow(`
	Example
	  $ default-browser
	  Safari
`);

(async () => {
	const {name} = await defaultBrowser();
	console.log(name);
})();
