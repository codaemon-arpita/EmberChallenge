import Component from '@ember/component';

export default Component.extend({
    isShowPriceModal: false,
    actions: {
      toggleModal() {
          this.toggleProperty('isShowPriceModal');
      }
    }
});
