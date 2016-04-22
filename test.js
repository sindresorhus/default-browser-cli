import test from 'ava';
import execa from 'execa';

test(async t => {
	const ret = await execa('./cli.js', {cwd: __dirname});
	t.true(ret.stdout.length > 0);
});
