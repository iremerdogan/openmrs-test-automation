/**
 * TEST‑ID: SCRUM‑16
 * -------------------------------------------------
 * Description : Register a new patient in OpenMRS.
 * Jira story   : https://iremnurerdogan.atlassian.net/browse/SCRUM-16
 *
 * This page‑object contains the UI elements and actions required to create a
 * patient record (demographic data, identifiers, etc.).
 * Keeping selectors centralized makes future UI changes painless.
 */


const { I } = inject();

const {faker} = require('@faker-js/faker');

module.exports = {
  
    fields:{
        patientId: '//div[contains(@class,"cds--tag--gray")]//span[contains(@class,"_7O7")]',
        firstName: 'input#givenName',
        familyName: 'input#familyName',
        birthDate: '//div[@class="cds--date-picker-input__wrapper _7eqzzRk9Nly5JXyWWDkZew== kCZM4leo22nH97QO2RKzlQ=="]',
        birthDay: '//span[@data-type="day"]',
        birthMonth: '//span[@data-type="month"]',
        birthYear: '//span[@data-type="year"]',
        addressCity: 'input#cityVillage',
        addressCountry: 'input#country',
        patientPhone: 'input#phone',
        idCard: 'input[id*="idCard"]',
        legacyId: 'input[id*="legacyId"]',
        oldId: 'input[id*="ldIdentificationNumber"]',
    },

    buttons:{
        addPatientBtn: '//button[@name="AddPatientIcon"]',
        dateForward: '//button[@id="react-aria8241816415-:r3b:"]',
        registerBtn: '//button[contains(text(),"Register patient")]'
    },

    options:{
        genderFemOption: '//span[contains(text(),"Female")]',
    },

    messages:{
        successMsg: "//*[@class='cds--actionable-notification__button-wrapper']",
        patientInfo: '//span[contains(text(),"Vitals and biometrics")]'
    },

    patientData: {
        newpatientId: '//div[contains(@class,"cds--tag--gray")]//span[contains(@class,"_7O7")]'
    },

    addPatient: async function(){
        //produce fake personal info
        const firstName = faker.person.firstName('female');
        const lastName = faker.person.lastName();
        const city = faker.location.city();
        const country = faker.location.country();
        const phoneNumber = faker.phone.number();

        const birthDate = faker.date.birthdate({max: 139});
        const birthDay = String(birthDate.getDate()).padStart(2, '0');
        const birthMonth = String(birthDate.getMonth() +1).padStart(2, '0');
        const birthYear = String(birthDate.getFullYear());

        const idCard = faker.number.int({max: 999999999, min: 111111111});
        const legacyId = faker.number.int({max: 999999999, min: 111111111});
        const olId = faker.number.int({max: 999999999, min: 111111111});

        this.patientData.firstName = firstName;
        this.patientData.lastName = lastName;
    
        //enter the personal info
        I.wait(2);
        I.waitForElement(this.buttons.addPatientBtn, 40);
        I.click(this.buttons.addPatientBtn);
        I.waitForElement(this.fields.firstName, 20);
        I.fillField(this.fields.firstName, firstName);
        I.waitForElement(this.fields.familyName);
        I.fillField(this.fields.familyName, lastName);
        I.waitForElement(this.options.genderFemOption);
        I.click(this.options.genderFemOption);

        //choose the birth date
        await I.waitForElement(this.fields.birthDate);

        //for a synchronous test process
        await I.wait(2);
        await I.click(this.fields.birthDay);
        await I.type(birthDay);
        await I.wait(0.5);

        await I.click(this.fields.birthMonth);
        await I.pressKey(['Ctrl', 'a']);
        await I.type(birthMonth);
        await I.wait(0.5);
        
        await I.click(this.fields.birthYear);
        await I.pressKey(['Ctrl', 'a']);
        await I.type(birthYear);

        //during the process, sometimes it was mandatory to enter the id info
        //refactored the method according to this
            
        const idPart = await I.grabNumberOfVisibleElements(this.fields.idCard)
        if (idPart > 0)
        {
        I.fillField(this.fields.idCard, idCard);
        I.waitForElement(this.fields.legacyId, 5);
        I.fillField(this.fields.legacyId, legacyId);
        I.waitForElement(this.fields.oldId, 5);
        I.fillField(this.fields.oldId, olId);
        }

        else {     
        I.waitForElement(this.fields.addressCity);
        I.fillField(this.fields.addressCity, city);
        I.waitForElement(this.fields.addressCountry);
        I.fillField(this.fields.addressCountry, country);
        I.waitForElement(this.fields.patientPhone);
        I.fillField(this.fields.patientPhone, phoneNumber);
        }
        

        I.waitForElement(this.buttons.registerBtn);
        I.click(this.buttons.registerBtn);
        I.waitForElement(this.messages.successMsg, 20);
        I.seeElement(this.messages.successMsg);
        I.waitForElement(this.messages.patientInfo, 45);
        I.seeElement(this.messages.patientInfo);
        await I.waitForElement(this.patientData.newpatientId, 20); //get the id of the newly registered patient
        const patientId = await I.grabTextFrom(this.patientData.newpatientId);
        this.patientData.patientId = patientId;
        
        console.log(this.patientData);
},

};
