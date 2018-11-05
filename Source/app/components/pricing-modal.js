import Component from '@ember/component';

export default Component.extend({
    isShowPriceModal: false,
    actions: {
        toggleModal() {
            $("#pricing-modal").hide();
            this.sendAction('toggleModal');
        }
    }
});
