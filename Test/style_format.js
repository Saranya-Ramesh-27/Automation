const { I } = inject();
const { strict: assert } = require('assert'); 
const Home = require('../pages/Home/Home_Style');
Feature('Apply Bold')

const HomePageUrl = "https://inforiverwebtest.azurewebsites.net/?csvLocation=Sanity.csv&config=Sanity.json&URLLoad=true";
Before(async ({ I }) => {
    await I.amOnPage(HomePageUrl);
});

Scenario('Apply Bold To Entire Column', async ({ I }) => {

    const columnCount = await I.grabNumberOfVisibleElements(Home.Table.totalColumn)
    for (let i = 1; i <= columnCount; i++) {
        await I.click(`(${Home.Table.totalColumn})[${i}]`); 
        await Home.clickOnBold(); 
        I.wait(1);
    }
    const fontWeight = await I.grabCssPropertyFromAll(Home.Table.totalCell, 'font-weight');
    const allBold = fontWeight.every(weight => parseInt(weight, 10) >= 600);
    assert.equal(allBold, true, "Not all elements are bold");

});

Scenario('Apply Bold To Single Row', async ({ I }) => {
    const boldXPath = await Home.getSingleRowBoldXPath(3);
    await I.click(boldXPath);
    await Home.clickOnBold(); 
    const locator = await Home.getSingleRowCellsXPath(3);
    const fontWeight = await I.grabCssPropertyFromAll(locator, 'font-weight');
    const allBold = fontWeight.every(weight => parseInt(weight, 10) >= 600);
    assert.equal(allBold, true, 'Not all elements are bold');
});

Scenario('Apply Bold To Single Cell', async ({ I }) => {
    await I.click(Home.Table.singleCell)
    await Home.clickOnBold(); 
    const fontXPath = await Home.getSingleCellFontWeightXPath(2, 1);
    const fontWeight = await I.grabCssPropertyFrom(fontXPath, 'font-weight');
    assert.equal(fontWeight, '600', 'Font weight should be 600 (bold)');
});
