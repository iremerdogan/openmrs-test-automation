Feature('add medications');

Before(async ({ loginPage, add_patientPage, search_patientPage, add_patientVisitPage, add_vitalsPage }) => {
  await loginPage.login();
  await add_patientPage.addPatient();
  await search_patientPage.searchPatient(add_patientPage.patientData.patientId);
  await add_patientVisitPage.patientVisit();
  await add_vitalsPage.addVitals();
});

Scenario('Prescribe a medication', async ({ I, add_medicationPage }) => {
  await add_medicationPage.addMedication();
});


