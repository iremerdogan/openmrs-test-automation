Feature('Add a patient visit');

Before (async ({loginPage, add_patientPage, search_patientPage})=> {
    await loginPage.login();
    await add_patientPage.addPatient();
    await search_patientPage.searchPatient(add_patientPage.patientData.patientId);
});

Scenario('Add new visit for a patient', ({I, add_patientVisitPage}) => {
    add_patientVisitPage.patientVisit();
});