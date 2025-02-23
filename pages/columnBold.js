Feature('Apply Bold to Entire Column')
const { strict: assert } = require('assert'); 
Scenario('test something', async ({ I }) => {
    await I.amOnPage("https://inforiverwebtest.azurewebsites.net/?csvLocation=Sanity.csv&config=Sanity.json&URLLoad=true", { waitUntil: 'domcontentloaded', timeout: 60000 });
    const columnCount = await I.grabNumberOfVisibleElements(`//div[contains(@class,'outsideSelection resizable-Headers')]/div/div[2]/div`)

    for(i = 1; i <= columnCount; i++){
        I.click(`(//div[contains(@class,'outsideSelection resizable-Headers')]/div/div[2]/div)[${i}]`)
        I.click(`//span[@class='infoRiver light-bold toolbar-icon-button']`)
        I.wait(1)
    }

    const cellCount = await I.grabNumberOfVisibleElements(`//span[@class='number-cell']`)
    for (let row = 1; row <= cellCount; row++) {
            let fontWeight = await I.grabCssPropertyFrom(`(//span[@class='number-cell'])[${row}]`, 'font-weight');
            assert.equal(fontWeight, '700', `Font weight should be 700`);
    }

    // const rowCount = await I.grabNumberOfVisibleElements(`//div[@class='non-sticky-grid-cells']/div[normalize-space()]`)
    // for (let row = 0; row < rowCount; row++) {
    //     for (let col = 1; col <= columnCount; col++) {
    //         let fontWeight = await I.grabCssPropertyFrom(`//div[contains(@id,'table-row-${row}_table-col-${col}')]`, 'font-weight');
    //         assert.equal(fontWeight, '700', `Font weight should be 700 (bold) in row ${row}, column ${col}`);
    //     }
    // }    

});