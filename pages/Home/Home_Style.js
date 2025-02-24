const toolbar = require("../toolbar");
const { I } = inject();
module.exports = {
    Table: {
        totalColumn: `//div[contains(@class,'outsideSelection resizable-Headers')]/div/div[2]/div`,
        totalCell: `//span[@class='number-cell']`,
        singleRowPinnedColumn: `//div[@id="table-row-2_table-col-0"]`, 
        // singleRowCells: `//div[contains(@id,"table-row-1_table-col-")]//following-sibling::span`,
        singleCell: `//div[@id="table-row-2_table-col-1"]`,
        // singleCellFont: `//div[@id="table-row-2_table-col-1"]/div/span`,
    },
    async clickOnBold() {
        await I.click(toolbar.HomeTab.Style.bold);
        await I.say('Clicked on Bold');
    },
    async getSingleCellFontWeightXPath(row, col) {
        return `//div[@id="table-row-${row}_table-col-${col}"]/div/span`;
    },
    async getSingleRowBoldXPath(row){
        return `//div[@id="table-row-${row}_table-col-0"]`
    },
    async getSingleRowCellsXPath(row){
        return `//div[contains(@id,"table-row-${row}_table-col-")]//following-sibling::span`
    }


}
