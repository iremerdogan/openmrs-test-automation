Feature('search for a patient');

Before (({loginPage, add_patientPage}) => {
loginPage.login();
add_patientPage.addPatient();
});

Scenario('Search for a patient', ({I, search_patientPage, add_patientPage}) => {
    search_patientPage.searchPatient(add_patientPage.patientData.patientId);
});
