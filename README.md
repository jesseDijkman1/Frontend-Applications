# Read Me - Risicotaxatie app
#### Student: Jesse Dijkman

## Concept
Een verbeterde versie van de risico taxatie-app. Met als doel: 'Het verlagen van het aantal uit huis geplaatste kinderen te verlagen'.

De aanpassing die ik heb aangebracht zijn:
- Nieuwe en minder categorieën (Kind, Ouders, Vader, Moeder, Overig),
- Progressive disclosure (zodat het minder overweldigend is voor de jeugdzorgers),
- Bij elke verandering in een input het risico updaten,
- Het risico met kleur aangeven (en een getal),
- Het aangeven van hoeveel procent van een categorie is ingevuld,
- Met localstorage ingevulde data behouden wanneer de gebruiker terugkomt,
- en meer ...

---
## Result
Heb een stap voor stap forumulier gemaakt waarmee het risico wordt berekend. 


## Installation guide

Installing ember-cli
```npm install -g ember-cli```

Creating a new project
```ember new ember-project```

---

## Proces
### Maandag (8-10-18)
Introductie, geen werk

---

### Dinsdag (9-10-18)
3 presentaties over de frameworks: React, Angular en Vue.
Onderzoek verricht naar frameworks om een keuze te maken van welke ik uiteindelijk ga gebruiken om de opdracht te maken.
De onderzochte frameworks waren:
- Vue.js
- React.js
- Polymer.js
- Ember.js
- Aurelia.js
- Meteor.js

Van een aantal frameworks had ik een aantal pros and cons verzameld, die zijn als volgt:

#### ReactJS:

**Pros:**
- Realtime updating (Via the Virtual DOM), it’s quick
- Components
- Downward data binding?
- Open-source Facebook library

**Cons:**
- High speed development
- Poor documentation
- Steep learning curve?

---

#### VueJS:

**Pros:**
- Small (and fast) size (18kb)
- For single-page and complex applications
- Easy to learn?
- Easy to read

**Cons:**
- Lack of plugins (because of the age)
- Evolving fast

---

#### MeteorJS:

**Pros:**
- Simplicity
- Lots of packages and libraries
- Seamless Cient-server communication …

**Cons:**
- Full stack …

Uit het onderzoek kwam er een top 3 naar voren:
1. Vue.js
2. React.js
3. Meteor.js

**Bronnen:**
- https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/
- https://javascriptreport.com/the-ultimate-guide-to-javascript-frameworks/#aurelia
- https://raygun.com/blog/popular-javascript-frameworks/
- https://www.meteor.com/
- https://www.quora.com/Can-you-tell-me-the-pros-cons-of-using-Meteor-to-develop-a-web-application
- http://www.binariks.com/blog/tips/10-pros-cons-meteor-js-development/
- https://www.quora.com/What-are-the-pros-and-cons-of-using-Polymer-for-front-end-development
- http://www.olsondigital.com/blog/code/react-vs-polymer
- https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282

---

### Woensdag (10-10-18)
In de ochtend hadden we een presentatie van Arjan. Na de presentatie gingen we
ons bezig houden met de gekozen framework (Ember.js).
Ik heb een aantal tutorials bekeken op Youtube
- (Traversy Media)[https://www.youtube.com/watch?v=owDmPTSJkrg]
- (
Kyle Robinson Young
)[https://www.youtube.com/watch?v=53OpEYA4zPQ&t=77s]

Na het bekijken van de tutorials heb ik Ember-CLI geinstalleerd en ben ik een beetje gaan uitproberen met behulp van de (quick start)[https://guides.emberjs.com/release/getting-started/quick-start/].

---

### Donderdag (11-10-18)
**Doel:**
- Ember uitproberen, het leren kennen.
In het begin van de dag heb ik een (tutorial)[https://guides.emberjs.com/release/tutorial/ember-cli/] gevolgd/gemaakt. Na de tutorial ben ik ember een beetje gaan uitproberen met test projectjes.

---

### Vrijdag (12-10-18)
**Doel:**
- Goede en slechte punten van de kind veilig thuis website opschrijven,
- De layout een beetje duidelijk maken voor mijzelf (geen details, alleen grote blokken),
- RisicoTaxatieApp project aanmaken en een begin maken

Heb in het begin het project aangemaakt (RisicoTaxatieApp), en daarna de kind veilig thuis website bekeken en aantekeningen gemaakt plus een paar schetjes (van de layout).
Ben daarna begonnen met de html en css. Heb geprobeerd om javascript te gebruiken (DOM manipulatie), met weinig succes.

---

### Maandag (15-10-18)
**Doel:**
- JSON file verwerken in het prototype

In de ochtend kwamen er 3 jeugdwerkers op bezoek om vragen te beantwoorden en wat te vertellen over hun werk. In de middag heb ik het JSON bestand verwerkt en in de avond heb ik de code geschreven om het te sorteren op vraag.

---

### Dinsdag (16-10-18)
**Doel:**
- De date uit de JSON file omzetten naar inputs

Ik heb de data kunnen omzetten en categoriseren in mijn eigen categorieen. Heb ook de vormgeving zo goed als af gemaakt. De gebruiker kan door de vragenlijst heen klikken met een aantal animaties.

---

### Woensdag (17-10-18)
**Doel:**
- Het mogelijk maken om het risico te bereken door een input te klikken. En data opslaan in localStorage

Ik heb bij elke input een onchange event gezet zodat wanneer een gebruiker iets verandert het risico ook verandert. Het was even een gedoe om te beslissen hoe ik het ging doen, via een controller, component, helper of plain javascript. Het is uiteindelijk plain javascript geworden.
Heb ook een animatie gemaakt bij het bereken van het risico. Wanneer het risico verandert wordt er elke milliseconde 0.01 bij opgeteld of van afgetrokken.

---

### Donderdag (18-10-18)
**Doel:**
- Localstorage gebruiken om date op te slaan, en het in de template gebruiken zodat input al ingevuld zijn van de vorige keer. Ook een clear knop toevoegen en de kleur-indicator werkend maken.

Alles hierboven is gelukt, plus ik heb ook de code toegevoegd die aangeeft hoeveel procent van een categorie is ingevuld zodat de gebruiker weet waar nog informatie mist.
