import {expectType} from 'tsd';
import hashObject = require('.');

const options: hashObject.Options = {};

expectType<string>(hashObject({'🦄': '🌈'}));
expectType<string>(
	hashObject({'🦄': '🌈'}, {algorithm: 'sha1', encoding: 'base64'})
);
expectType<Buffer>(hashObject({'🦄': '🌈'}, {encoding: 'buffer'}));
expectType<Buffer>(
	hashObject({'🦄': '🌈'}, {encoding: 'buffer', algorithm: 'sha1'})
);
