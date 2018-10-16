import Route from '@ember/routing/route';

export default Route.extend({
  model() {
   const data = [
      {
        "Coefficients": "",
        "Categorie": "Intercept",
        "Name": "Intercept",
        "Gewicht": "-7,36863"
      },
      {
        "Coefficients": "GESLACHT Mannen",
        "Categorie": "Geslacht",
        "Name": "Man",
        "Gewicht": "-0,12611"
      },
      {
        "Coefficients": "Herkomst ouders: Beide ouders niet Nederlands",
        "Categorie": "Herkomst",
        "Name": "Beide ouders niet Nederlands",
        "Gewicht": "0,16972"
      },
      {
        "Coefficients": "Herkomst ouders: Een van de ouders Nederlands en de andere niet Nederlands",
        "Categorie": "Herkomst",
        "Name": "Een van de ouders Nederlands en de andere niet Nederlands",
        "Gewicht": "-0,08943"
      },
      {
        "Coefficients": "Type huishouden: Eenouderhuishouden",
        "Categorie": "Type huishouden",
        "Name": "Eenouderhuishouden",
        "Gewicht": "0,49608"
      },
      {
        "Coefficients": "Type huishouden: Eenpersoonshuishouden",
        "Categorie": "Type huishouden",
        "Name": "Eenpersoonshuishouden",
        "Gewicht": "1,71859"
      },
      {
        "Coefficients": "Type huishouden: Gehuwd paar zonder kinderen",
        "Categorie": "Type huishouden",
        "Name": "Gehuwd paar zonder kinderen",
        "Gewicht": "1,06108"
      },
      {
        "Coefficients": "Type huishouden: Institutioneel huishouden",
        "Categorie": "Type huishouden",
        "Name": "Institutioneel huishouden",
        "Gewicht": "1,92321"
      },
      {
        "Coefficients": "Type huishouden: Niet-gehuwd paar met kinderen",
        "Categorie": "Type huishouden",
        "Name": "Niet-gehuwd paar met kinderen",
        "Gewicht": "0,32694"
      },
      {
        "Coefficients": "Type huishouden:Niet-gehuwd paar zonder kinderen",
        "Categorie": "Type huishouden",
        "Name": "Niet-gehuwd paar zonder kinderen",
        "Gewicht": "-14,15530"
      },
      {
        "Coefficients": "Type huishouden: Onbekend",
        "Categorie": "Type huishouden",
        "Name": "Onbekend huishouden",
        "Gewicht": "-13,81002"
      },
      {
        "Coefficients": "Type huishouden: Overig huishouden",
        "Categorie": "Type huishouden",
        "Name": "Overig huishouden",
        "Gewicht": "0,91365"
      },
      {
        "Coefficients": "Scheiding",
        "Categorie": "Gescheiden ouders",
        "Name": "Ja",
        "Gewicht": "0,27683"
      },
      {
        "Coefficients": "VSV Niet van toepassing",
        "Categorie": "Voortijdig schoolverlaten",
        "Name": "Niet van toepassing",
        "Gewicht": "0,38736"
      },
      {
        "Coefficients": "VSV Geen data over VSV bekend",
        "Categorie": "Voortijdig schoolverlaten",
        "Name": "Onbekend",
        "Gewicht": "0,80564"
      },
      {
        "Coefficients": "VSV Geen vsv: uit onderwijs met startkwalificatie",
        "Categorie": "Voortijdig schoolverlaten",
        "Name": "Uit onderwijs met startkwalificatie",
        "Gewicht": "-13,64193"
      },
      {
        "Coefficients": "VSV Voortijdig schoolverlater (vsv)",
        "Categorie": "Voortijdig schoolverlaten",
        "Name": "Voortijdig schoolverlaten",
        "Gewicht": "0,34684"
      },
      {
        "Coefficients": "SPECIAAL_Onderwijs Niet-regulier onderwijs",
        "Categorie": "Soort onderwijs",
        "Name": "Niet-regulier onderwijs",
        "Gewicht": "-0,33031"
      },
      {
        "Coefficients": "SPECIAAL_Onderwijs Geen onderwijsdata bekend",
        "Categorie": "Soort onderwijs",
        "Name": "Onderwijs onbekend",
        "Gewicht": "-0,76957"
      },
      {
        "Coefficients": "Soort woning Huurwoning, met huurtoeslag",
        "Categorie": "Soort woning",
        "Name": "Huurwoning met huurtoeslag",
        "Gewicht": "0,38401"
      },
      {
        "Coefficients": "Soort woning Huurwoning, zonder huurtoeslag",
        "Categorie": "Soort woning",
        "Name": "Huurwoning zonder huurtoeslag",
        "Gewicht": "0,40420"
      },
      {
        "Coefficients": "Soort woning onbekend",
        "Categorie": "Soort woning",
        "Name": "Onbekend",
        "Gewicht": "2,40126"
      },
      {
        "Coefficients": "Werk vader Geen werk",
        "Categorie": "Werk vader",
        "Name": "Geen werk en niet actief",
        "Gewicht": "0,33772"
      },
      {
        "Coefficients": "Werk vader onbekend",
        "Categorie": "Werk vader",
        "Name": "Onbekend",
        "Gewicht": "0,23486"
      },
      {
        "Coefficients": "Werk moeder Geen werk",
        "Categorie": "Werk moeder",
        "Name": "Geen werk en niet actief",
        "Gewicht": "0,36958"
      },
      {
        "Coefficients": "Werk moeder onbekend",
        "Categorie": "Werk moeder",
        "Name": "Onbekend",
        "Gewicht": "-0,95012"
      },
      {
        "Coefficients": "Slachtoffer Ja",
        "Categorie": "Slachtoffer",
        "Name": "Ja",
        "Gewicht": "0,23639"
      },
      {
        "Coefficients": "Jeuggdhulp zonder verblijf vooraf",
        "Categorie": "Traject vooraf",
        "Name": "Jeugdhulp zonder verblijf gehad",
        "Gewicht": "1,52774"
      },
      {
        "Coefficients": "Leeftijd moederbij _geboorte_cat 20 tot 25 jaar",
        "Categorie": "Leeftijd moeder",
        "Name": "20 tot 25 jaar",
        "Gewicht": "0,10852"
      },
      {
        "Coefficients": "Leeftijd moederbij _geboorte_cat 25 tot 30 jaar",
        "Categorie": "Leeftijd moeder",
        "Name": "25 tot 30 jaar",
        "Gewicht": "-0,08841"
      },
      {
        "Coefficients": "Leeftijd moederbij _geboorte_cat 35 tot 40 jaar",
        "Categorie": "Leeftijd moeder",
        "Name": "35 tot 40 jaar",
        "Gewicht": "0,23988"
      },
      {
        "Coefficients": "Leeftijd moederbij _geboorte_cat ouder dan 40 jaar",
        "Categorie": "Leeftijd moeder",
        "Name": "40 jaar en ouder",
        "Gewicht": "-0,11153"
      },
      {
        "Coefficients": "Leeftijd moederbij _geboorte_cat 0 tot 20 jaar",
        "Categorie": "Leeftijd moeder",
        "Name": "Jonger dan 20 jaar",
        "Gewicht": "0,45150"
      },
      {
        "Coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
        "Categorie": "Leeftijd vader",
        "Name": "25 tot 30 jaar",
        "Gewicht": "0,03107"
      },
      {
        "Coefficients": "Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar",
        "Categorie": "Leeftijd vader",
        "Name": "35 tot 40 jaar",
        "Gewicht": "-0,21624"
      },
      {
        "Coefficients": "Leeftijd vaderbij _geboorte_cat ouder dan 40 jaar",
        "Categorie": "Leeftijd vader",
        "Name": "40 jaar en ouder",
        "Gewicht": "-0,32645"
      },
      {
        "Coefficients": "Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar",
        "Categorie": "Leeftijd vader",
        "Name": "Jonger dan 25 jaar",
        "Gewicht": "-0,00587"
      },
      {
        "Coefficients": "Verdenking misdrijf Vader of moeder Ja",
        "Categorie": "Vader of moeder verdacht",
        "Name": "Ja",
        "Gewicht": "0,50027"
      },
      {
        "Coefficients": "Verdenking misdrijf KIND Ja",
        "Categorie": "Kind verdacht",
        "Name": "Ja",
        "Gewicht": "0,94738"
      },
      {
        "Coefficients": "HALTDELICT Ja",
        "Categorie": "Halt delict",
        "Name": "Ja",
        "Gewicht": "0,36448"
      },
      {
        "Coefficients": "Onderwijsverandering afschalen",
        "Categorie": "Verandering onderwijs niveau",
        "Name": "Afschalen",
        "Gewicht": "0,58732"
      },
      {
        "Coefficients": "Onderwijsverandering onbekend",
        "Categorie": "Verandering onderwijs niveau",
        "Name": "Onbekend",
        "Gewicht": "-1,11682"
      },
      {
        "Coefficients": "Leeftijdsverschil ouders meer dan 5 jaar",
        "Categorie": "Leeftijdsverschil ouders",
        "Name": "Meer dan 5 jaar",
        "Gewicht": "0,28581"
      },
      {
        "Coefficients": "Actueel onderwijs niveau Basisonderwijs",
        "Categorie": "Actueel onderwijs niveau",
        "Name": "Basisonderwijs",
        "Gewicht": "0,25232"
      },
      {
        "Coefficients": "Actueel onderwijs niveau Geen onderwijsdata bekend",
        "Categorie": "Actueel onderwijs niveau",
        "Name": "Onderwijs onbekend",
        "Gewicht": "0,00000"
      },
      {
        "Coefficients": "Actueel onderwijs niveau Vmbo-b/k, mbo 1 en mbo 2",
        "Categorie": "Actueel onderwijs niveau",
        "Name": "Vmbo b/k, mbo 1 en mbo 2",
        "Gewicht": "0,87842"
      },
      {
        "Coefficients": "Actueel onderwijs niveau Vmbo-g/t, mbo 3 en mbo 4",
        "Categorie": "Actueel onderwijs niveau",
        "Name": "Vmbo g/t, mbo 3 en mbo 4",
        "Gewicht": "0,56882"
      },
      {
        "Coefficients": "Actueel onderwijs niveau Vwo en Wo-bachelor",
        "Categorie": "Actueel onderwijs niveau",
        "Name": "Vwo en Wo bachelor",
        "Gewicht": "-0,83566"
      },
      {
        "Coefficients": "Hoogst behaalde diploma vader Geen onderwijsdata bekend",
        "Categorie": "Hoogst behaalde diploma vader",
        "Name": "Onderwijs onbekend",
        "Gewicht": "0,88464"
      },
      {
        "Coefficients": "Hoogst behaalde diploma vader Vmbo-b/k, mbo 1 en mbo 2",
        "Categorie": "Hoogst behaalde diploma vader",
        "Name": "Vmbo b/k, mbo 1 en mbo 2",
        "Gewicht": "-0,21630"
      },
      {
        "Coefficients": "Hoogst behaalde diploma vader Vmbo-g/t, mbo 3 en mbo 4",
        "Categorie": "Hoogst behaalde diploma vader",
        "Name": "Vmbo g/t, mbo 2 en mbo 3",
        "Gewicht": "0,67119"
      },
      {
        "Coefficients": "Hoogst behaalde diploma vader Vwo en Wo-bachelor en Wo-master",
        "Categorie": "Hoogst behaalde diploma vader",
        "Name": "Vwo, Wo bachelor en Wo master",
        "Gewicht": "-12,08995"
      },
      {
        "Coefficients": "Hoogst behaalde diploma moeder Geen onderwijsdata bekend",
        "Categorie": "Hoogst behaalde diploma moeder",
        "Name": "Onderwijs onbekend",
        "Gewicht": "0,03655"
      },
      {
        "Coefficients": "Hoogst behaalde diploma moeder Vmbo-b/k, mbo 1 en mbo 2",
        "Categorie": "Hoogst behaalde diploma moeder",
        "Name": "Vmbo b/k, mbo 1 en mbo 2",
        "Gewicht": "0,15936"
      },
      {
        "Coefficients": "Hoogst behaalde diploma moeder Vmbo-g/t, mbo 3 en mbo 4",
        "Categorie": "Hoogst behaalde diploma moeder",
        "Name": "Vmbo g/t, mbo 2 en mbo 3",
        "Gewicht": "0,03334"
      },
      {
        "Coefficients": "Hoogst behaalde diploma moeder Vwo en Wo-bachelor en Wo-master",
        "Categorie": "Hoogst behaalde diploma moeder",
        "Name": "Vwo, Wo bachelor en Wo master",
        "Gewicht": "-13,03162"
      }
    ]

    // const rx = new RegExp('kind|ouders|vader|moeder'); Werkt niet

    let categorieen = {
      kind: [],
      ouders: [],
      vader: [],
      moeder: [],
      overig: []
    }
    let vragen = [];
    let checkCat = [];

    for (let i = 0; i < data.length; i++) {
      if (!checkCat.includes(data[i].Categorie)) {
        checkCat.push(data[i].Categorie)
        vragen.push({
          vraag: data[i].Categorie,
          antwoorden: [data[i].Name]
        })
      } else {
        vragen.forEach((ans) => {
          if (ans.vraag === data[i].Categorie) {
            ans.antwoorden.push(data[i].Name);
          }
        })
      }
    }
    // return vragen;
    vragen.forEach((vraag) => {
      let cats = ['kind','ouders','vader','moeder'];
      let words = vraag.vraag.toLowerCase().split(' ');

      if (words.includes('kind') || ['Geslacht', 'Soort onderwijs', 'Slachtoffer', 'Voortijdig schoolverlaten', 'Halt delict', 'Verandering onderwijs niveau', 'Actueel onderwijs niveau'].includes(vraag.vraag)) {
        categorieen.kind.push(vraag);
      }
      else if (words.includes('ouders') || vraag.vraag == 'Herkomst') {
        categorieen.ouders.push(vraag);
      }
      else if (words.includes('vader')) {
        if (words.includes('moeder')) {
          categorieen.ouders.push(vraag);
        } else {
          categorieen.vader.push(vraag);
        }

      }
      else if (words.includes('moeder')) {
        categorieen.moeder.push(vraag);
      }
      else {
        categorieen.overig.push(vraag);
      }

    })
    return categorieen;
  }
});
