import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('burrito');
  },

  actions: {
    destroyBurrito(burrito) {
      burrito.destroyRecord();
      this.transitionTo('index');
    }
  }
});
