'use strict';

var fs = require('fs-extra');

fs.copySync('./build/static', 'public/static', {
    dereference: true
});

console.log();