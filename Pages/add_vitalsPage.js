/**
 * TEST‑ID: SCRUM‑19
 * -------------------------------------------------
 * Description : Record vital‑sign measurements (BP, temperature, pulse, etc.).
 *
 * Provides helpers to fill the vital‑sign form, validate accepted ranges,
 * and submit the data for the active patient visit.
 */


const {I} = inject();

const {faker} = require('@faker-js/faker');

module.exports = {

    fields:{
        temperature: '//input[@name="Temperature"]',
        systolicBP: '//input[@name="systolic"]',
        diastolicBP: '//input[@name="diastolic"]',
        heartRate: '//input[@name="Pulse"]',
        respirationRate: '//input[@name="Respiration rate"]',
        oSaturation: '//input[@name="Oxygen saturation"]',
        weight: '//input[@name="Weight"]',
        height: '//input[@name="Height"]',
    },

    buttons:{
        recordVitals: '//p[contains(., "There are no vital signs")]/following-sibling::p/button',
        saveBtn: '//button[contains(text(),"Save and close")]',
    },

    messages:{
        noVitals: '//p[contains(text(),"There are no vital signs")]',
        successMsg: '//*[contains(text(),"Vitals and Biometrics saved")]'
    },
       
    patientVitals:{},
    
    addVitals: async function(){

        this.patientVitals.temperature = faker.number.float({max: 42, min: 36, fractionDigits: 2}).toString();
        this.patientVitals.diastolicBP = faker.number.int({min: 70, max: 82}).toString();
        this.patientVitals.systolicBP = faker.number.int({min: 110, max: 132}).toString();
        this.patientVitals.heartRate = faker.number.int({min: 100, max: 150}).toString();
        this.patientVitals.weight = faker.number.float({ min: 50, max: 100, precision: 0.1 , fractionDigits: 2}).toString();
        this.patientVitals.height = faker.number.int({ min: 150, max: 190 }).toString();
            
        I.wait(3);
        //I am aiming to test adding vitals for a newly recorded patient as part of E2E test 
        const vitalStatus = await I.grabNumberOfVisibleElements(this.messages.noVitals);
        if (vitalStatus > 0) {
            I.waitForElement(this.buttons.recordVitals, 10);
            I.click(this.buttons.recordVitals);
        };

        const popup = await I.grabNumberOfVisibleElements('//div[@class="cds--modal-header"]');
        I.wait(2);
        if (popup > 0){
            I.waitForElement('//button[contains(text(),"Cancel")]', 5);
            I.click('//button[contains(text(),"Cancel")]');
        }
        else if (I.seeElement(this.messages.noVitals)) {
                I.waitForElement(this.buttons.recordVitals, 10);
                I.click(this.buttons.recordVitals);
        };

        const vitalsData =[
        { field: this.fields.temperature, value: this.patientVitals.temperature},
        { field: this.fields.systolicBP, value: this.patientVitals.systolicBP},
        { field: this.fields.diastolicBP, value: this.patientVitals.diastolicBP},
        { field: this.fields.heartRate, value: this.patientVitals.heartRate},
        { field: this.fields.weight, value: this.patientVitals.weight},
        { field: this.fields.height, value: this.patientVitals.height}, ]
            
        //created loop to add vitals data (cleaner code)
        for (const item of vitalsData)
        {
            I.waitForElement(item.field, 5);
            I.fillField(item.field, item.value);
            I.wait(0.5);
        }

        I.click(this.buttons.saveBtn);
        I.waitForElement(this.messages.successMsg, 10);
        I.seeElement(this.messages.successMsg);
        },

};