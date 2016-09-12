'use strict';

/**
 * This script sets up the dependency injection container, insulin.
 */

let glob = require('glob');
let opts = {
  cwd: __dirname,
  ignore: [
    './node_modules/**',
    './grunt/**',
    './Gruntfile.js',
    './**/*Spec.js',
    './bootstrap.js',
    './index.js'
  ]
};

let files = glob.sync('./**/*.js', opts);

// Let each file register itself with the DiC.
files.forEach(require);

console.log(files);

// Export the list of files.
module.exports = files;

