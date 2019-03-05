// Flags: --experimental-modules
/* eslint-disable node-core/required-modules */
import '../common/index.mjs';
import assert from 'assert';
import process from 'process';

assert.strictEqual(Object.prototype.toString.call(process), '[object process]');
