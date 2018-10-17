import Component from '@ember/component';

export default Component.extend({
  actions: {
    storeValue(newVal) {

      let name = newVal.target.name;
      name = name.replace(' ', '_');
      let val = newVal.target.value;

      localStorage.setItem(name, val);
    }
  }
});
