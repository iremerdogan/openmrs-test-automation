/**
 * TEST‑ID: SCRUM-22
 * -------------------------------------------------
 * Description : Admin logout flow for OpenMRS.
 *
 * This page‑object implements the logout steps using CodeceptJS.
 * All selectors are kept in one place to simplify maintenance.
 */


const {I} = inject();

module.exports = {

    buttons:{
        userBtn: '//button[@name="User"]',
        logoutBtn: '//button[contains(text(),"Logout")]',
    },

    fields: {   userName: 'input#username',    },

    logout: async function(){
        I.waitForElement(this.buttons.userBtn);
        I.click(this.buttons.userBtn);
        I.waitForElement(this.buttons.logoutBtn);
        I.click(this.buttons.logoutBtn);
        I.waitForVisible(this.fields.userName, 20);
    }


}