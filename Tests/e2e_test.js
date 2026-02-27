Feature("e2e test");

Before(async ({loginPage, add_patientPage, search_patientPage, add_patientVisitPage, add_vitalsPage, add_medicationPage}) => {
    await loginPage.login();
    await add_patientPage.addPatient();
    await search_patientPage.searchPatient(add_patientPage.patientData.patientId);
    await add_patientVisitPage.patientVisit();
    await add_vitalsPage.addVitals();
    await add_medicationPage.addMedication();
});

Scenario("e2e OpenHRM health-system test", async ({I, end_visitPage, logoutPage}) => {
    await end_visitPage.endVisit();
    await logoutPage.logout();
});