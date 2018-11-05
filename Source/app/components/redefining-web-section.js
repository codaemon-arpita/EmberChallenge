import Component from '@ember/component';

export default Component.extend({
    isShowLearnMoreModal: false,
    actions: {
        toggleModal() {
            this.toggleProperty('isShowLearnMoreModal');
        }
    }
});
