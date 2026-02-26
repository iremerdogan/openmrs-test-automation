const {I} = inject();

module.exports = {

    fields:{
        searchBar: '//input[@role="searchbox"]',
        patientInfoId: '//div[contains(@class,"cds--tag--gray")]//span[contains(@class,"_7O7")]'
    },

    buttons:{
        searchBtn: '//button[@aria-label="Search patient"]',
        mainPageBtn: '//a[@href="/openmrs/spa/home"]',
    },

    searchPatient: async function(patientId){
        await I.waitForElement(this.buttons.mainPageBtn, 5);
        await I.click(this.buttons.mainPageBtn);
        await I.waitForVisible('//p[contains(text(),"Service queues")]', 40);
        await I.waitForElement(this.buttons.searchBtn, 5);
        await I.click(this.buttons.searchBtn);
        await I.waitForElement(this.fields.searchBar, 5);
        await I.fillField(this.fields.searchBar, patientId);
        await I.waitForElement(`//span[contains(text(),"${patientId}")]`, 5); //because sometimes another element obscures it  
        await I.click(`//span[contains(text(),"${patientId}")]`);
        await I.waitForElement(this.fields.patientInfoId, 15);
    },
};



