const {I} = inject();

module.exports = {

    messages: {
        successMsg: '//div[contains(text(),"Visit ended")]',
    },

    buttons: {
        actionsBtn: 'button#custom-actions-overflow-menu-trigger',
        endActiveVisitBtn: '//button//div[contains(text(),"End active visit")]',
        endVisitBtn: '//button[contains(text(),"End Visit")]',
    },

    endVisit: async function(){
        I.waitForElement(this.buttons.actionsBtn, 5);
        I.click(this.buttons.actionsBtn);
        I.waitForElement(this.buttons.endActiveVisitBtn, 5);
        I.click(this.buttons.endActiveVisitBtn);
        I.waitForElement(this.buttons.endVisitBtn);
        I.click(this.buttons.endVisitBtn);
        I.waitForVisible(this.messages.successMsg, 7);
    },

}