
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


  

exports.runIt = function () {
    console.log('runIt...');

    (async function myFunction() {
        let driver = await new Builder().forBrowser('chrome').build();

        //your code inside this block
        await driver.get('https://en.wikipedia.org');
    })();
}