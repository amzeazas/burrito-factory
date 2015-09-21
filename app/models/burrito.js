import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  size: DS.attr(),
  sauce: DS.attr(),
  enchiloso: DS.attr(),
  cost: DS.attr(),
  image: DS.attr()
});
