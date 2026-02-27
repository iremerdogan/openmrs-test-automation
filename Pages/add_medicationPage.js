/**
 * TEST‑ID: SCRUM‑20
 * -------------------------------------------------
 * Description : Prescribe medication for a patient during a visit.
 *
 * Encapsulates the UI steps for searching a drug, selecting dosage/frequency,
 * and saving the prescription to the patient’s chart.
 */


const {I} = inject();

module.exports = {

    fields: {
        searchMed: '//input[starts-with(@placeholder, "Search for a drug")]',
        dose: 'input#doseSelection',
        medRoute: 'input#editRoute',
        frequency: 'input#editFrequency',
        quantityDispense: 'input#quantityDispensed',
        indication: 'input#indication',
    },

    options:{
        routeOral: '//div[contains(text(),"Oral")]',
        twiceDaily: '//div[contains(text(),"Twice daily")]',
        },
    
    buttons:{
        addMedBtn: '//p[contains(text(),"active medications")]/following-sibling::p/button',
        orderAspirin: '//div[contains(., "Aspirin 81mg")]/ancestor::div[contains(@class, "cds--tile")]//button[contains(., "Order form")]',
        prescRefillsBtn: '//label[contains(., "Prescription refills")]/following-sibling::div//button[@title="Increment number"]',
        saveOrder: '//button[contains(text(),"Save order")]',
        signBtn: '//button//span[contains(text(),"Sign and close")]', 
    },

    messages:{
        orderValidation: '//div[contains(@class, "cds--tile")][.//span[text()="New"]][.//div[contains(., "Aspirin 81mg")]]',
        successMsg: '//div[contains(text(),"Placed orders")]',
    },

    addMedication: async function(){
        I.click(this.buttons.addMedBtn);
        //search and select the medication option
        I.waitForElement(this.fields.searchMed, 10);
        I.fillField(this.fields.searchMed, 'Aspirin');
        I.waitForElement(this.buttons.orderAspirin, 5);
        I.click(this.buttons.orderAspirin);

        //enter the dose, choose the route, frequency etc.
        I.waitForElement(this.fields.dose, 10);
        I.click(this.fields.dose);
        I.fillField(this.fields.dose, '1');
        I.waitForElement(this.fields.medRoute, 5);
        I.click(this.fields.medRoute);
        I.waitForElement(this.options.routeOral, 5);
        I.click(this.options.routeOral);
        I.waitForElement(this.fields.frequency, 5);
        I.click(this.fields.frequency);
        I.waitForElement(this.options.twiceDaily, 5);
        I.click(this.options.twiceDaily);
        I.waitForElement(this.fields.quantityDispense, 5);
        I.fillField(this.fields.quantityDispense, '1');
        I.waitForElement(this.buttons.prescRefillsBtn, 5);
        I.click(this.buttons.prescRefillsBtn);
        I.waitForElement(this.fields.indication, 5);
        I.fillField(this.fields.indication, 'Hypertension');
        I.waitForElement(this.buttons.saveOrder, 5);
        I.click(this.buttons.saveOrder);
        I.waitForVisible(this.messages.orderValidation, 10);
        I.click(this.buttons.signBtn);
        //see the success message
        I.waitForElement(this.messages.successMsg, 5);
        I.seeElement(this.messages.successMsg);
    }   
}