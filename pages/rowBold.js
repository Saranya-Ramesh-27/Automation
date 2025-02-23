Feature('Apply Bold to Row')
const { strict: assert } = require('assert'); 
Scenario('test something', async ({ I }) => {
    await I.amOnPage("https://inforiverwebtest.azurewebsites.net/?csvLocation=Sanity.csv&config=Sanity.json&URLLoad=true", { waitUntil: 'domcontentloaded', timeout: 60000 });
    await I.click(`//div[@id="table-row-2_table-col-0"]`);
    await I.click(`//span[@class='infoRiver light-bold toolbar-icon-button']`)
    const fontWeight = await I.grabCssPropertyFrom(`//div[contains(@id,"table-row-1_table-col-")]//following-sibling::span`, 'font-weight');
    assert.equal(fontWeight, '700', 'Font weight should be 700 (bold)');
});