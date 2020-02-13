const fs = require('fs');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

exports.runIt = function () {
    // If codes.js file exists load and run it
    if (fs.existsSync(__dirname + '/codes.js')) {
        console.log('Codes module found, running it ...');
        const codes = require('./codes');
        codes.codes();
    } else {
        // If no custom code is available run default code
        console.log('Custom code not found, so not loaded.');

        (async function myFunction() {
            let driver = await new Builder().forBrowser('chrome').build();

            await driver.get('https://en.wikipedia.org');
        })();
    }
}