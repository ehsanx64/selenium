const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

module.exports.codes = function () {
    (async function myFunction() {
        let driver = await new Builder().forBrowser('chrome').build();
        let searchTerm = 'Lisp (Programming Language)';

        // Open the Wikipedia
        await driver.get('https://wikipedia.org');

        // Click English language link
        await driver.findElement(By.css('#js-link-box-en')).click();
        
        // Search functionality
        let search = driver.findElement(By.css('#searchInput'));

        // Set focus on search textbox
        await search.click();

        // Type the search term
        await search.sendKeys(searchTerm);

        // Select and simulate click on search button
        let searchButton = driver.findElement(By.css('#simpleSearch > input[name=go]'));
        await searchButton.click();

        await driver.wait(until.elementLocated(By.id('firstHeading')), 30000);
        const searchResultHeader = driver.findElement(By.css('#firstHeading'));
    })();
}