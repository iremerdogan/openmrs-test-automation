Feature('add new patient')

Before(({loginPage}) => {
    loginPage.login();
});

Scenario('add new patient', ({I, add_patientPage}) =>{
add_patientPage.addPatient();
});



