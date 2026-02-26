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