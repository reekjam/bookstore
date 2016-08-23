import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur)
    }
  }

});
