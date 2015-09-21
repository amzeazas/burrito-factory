import Ember from 'ember';

export default Ember.Component.extend({
  addNewBurrito: false,
  actions: {
    burritoFormShow() {
      this.set('addNewBurrito', true);
    },
    save1() {
      var params = {
        cost: this.get('cost'),
        enchiloso: this.get('type'),
        image: this.get('image'),
        name: this.get('name'),
        sauce: this.get('sauce'),
        size: this.get('size')
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params);
    }
  }
});
