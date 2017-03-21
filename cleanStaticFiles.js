'use strict';

var fs = require('fs-extra');

fs.emptyDir('./build', err => {
    if (err) return console.error(err);

    console.log('success 1!')
});

fs.emptyDir('./public/static', err => {
    if (err) return console.error(err);

    console.log('success 2!')
});