import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('burrito');
  },

  actions: {

    save3(params) {
      var newBurrito = this.store.createRecord('burrito', params);
      newBurrito.save();
      this.set();
      this.transitionTo('index');
    },

    destroyBurrito(burrito) {
      burrito.destroyRecord();
      this.transitionTo('index');
    }
  }
});
