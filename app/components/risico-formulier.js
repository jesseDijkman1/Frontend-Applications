import Component from '@ember/component';

export default Component.extend({
  actions: {
    storeValue(newVal) {
      let vraag = newVal.target.name.split(' ').join('_');
      let antwoord = newVal.target.dataset.vraag;
      if (antwoord) {
        antwoord = antwoord.split(' ').join('_');
      }

      if (!antwoord) {
        antwoord = newVal.target.selectedOptions[0].dataset.vraag.split(' ').join('_');
      }

      localStorage.setItem(vraag, antwoord);
    }
  }
});
