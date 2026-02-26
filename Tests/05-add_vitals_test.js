Feature('Add vitals');

Before (async ({loginPage, add_patientPage, search_patientPage, add_patientVisitPage}) =>{
    await loginPage.login();
    await add_patientPage.addPatient();
    await search_patientPage.searchPatient(add_patientPage.patientData.patientId);
    await add_patientVisitPage.patientVisit();
});

Scenario('Add vitals of a patient', async ({I, add_vitalsPage}) => {
await add_vitalsPage.addVitals();
});