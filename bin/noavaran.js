#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-i, install', 'install all necessary tools for running a pre setup server')
  .parse(process.argv);

if (program.install) {
    console.log('you are installing ...');
} else {
  console.log('command not found');
}
