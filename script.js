//____________Parte 1____________
/* Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)

BONUS: provare a creare una funzione che stampi la carta in pagina. */

//Collect card information in an object
const firstCard = {
  name: "Bloodfire Colossus",
  "launch cost": [6, "R", "R"].join(", "),
  type: ["Creature", "Giant"].join(" - "),
  expansion: {
    edition: 9,
    rarity: "golden",
  },
  abilities: [
    {
      "launch cost": "R",
      description:
        "Sacrifice Bloodfire Colossus: Bloodfire Colossus deals 6 damage to each creature and each player.",
    },
  ],
  "flavor text": {
    text: "It took all its strength to contain the fire within.",
  },
  illustrator: "Greg Smith",
  collection: "177/350",
  strength: "13/13",
};

//Functions
function createCardTemplate(card) {
  let content = "";

  //Create variables to contain nested objects' content

  let expansionContent = "";
  // Check property value existence and add to the content
  if (
    card.expansion["edition"] != undefined &&
    card.expansion["rarity"] != undefined
  ) {
    expansionContent += `<b>${"expansion"}:</b><ul><li><span class='underlined'>${"edition"}:</span> ${
      card.expansion.edition
    }</li>`;
    expansionContent += `<li><span class='underlined'>${"rarity"}:</span> ${
      card.expansion.rarity
    }</li></ul>`;
  } else {
    if (card.expansion["edition"] != undefined) {
      expansionContent += `<b>${"expansion"}:</b><ul><li><span class='underlined'>${"edition"}:</span> ${
        card.expansion.edition
      }</li></ul>`;
    }
    if (card.expansion["rarity"] != undefined) {
      expansionContent += `<b>${"expansion"}:</b><ul><li><span class='underlined'>${"rarity"}:</span> ${
        card.expansion.rarity
      }</li></ul>`;
    }
  }

  let abilitiesContent = "";
  // Check property value existence and add to the content
  if (card["abilities"] != undefined) {
    for (let i = 0; i < card["abilities"].length; i++) {
      let ability = card["abilities"][i];
      if (
        ability["launch cost"] != undefined &&
        ability.description != undefined
      ) {
        abilitiesContent += `<li><b>${"abilities"}:</b><ul><li><span class='underlined'>launch cost:</span> ${
          ability["launch cost"]
        }</li>`;
        abilitiesContent += `<li><span class='underlined'>description:</span> ${ability.description}</li></ul></li>`;
      } else {
        if (ability != undefined) {
          abilitiesContent += `<li><b>${"abilities"}:</b><ul><li><span class='underlined'>launch cost:</span> ${
            ability["launch cost"]
          }</li></ul></li>`;
        }
        if (ability["launch cost"] != undefined) {
          abilitiesContent += `<li><b>${"abilities"}:</b><ul><li><span class='underlined'>description:</span> ${
            ability.description
          }</li></ul></li>`;
        }
      }
    }
  }

  let flavorTextContent = "";
  // Check property value existence and add to the content
  if (card["flavor text"] != undefined) {
    if (
      card["flavor text"].text != undefined &&
      card["flavor text"].author != undefined
    ) {
      flavorTextContent += `<li><b>${"flavor text"}: </b><ul><li><span class='underlined'>text:</span><em> ${
        card["flavor text"].text
      }</em></li>`;
      flavorTextContent += `<li><span class='underlined'>author:</span> ${card["flavor text"]["author"]}</li></ul></li>`;
    } else {
      if (card["flavor text"].text != undefined) {
        flavorTextContent += `<li><b>${"flavor text"}: </b><ul><li><span class='underlined'>text:</span><em> ${
          card["flavor text"].text
        }</em></li></ul></li>`;
      }
      if (card["flavor text"].author != undefined) {
        flavorTextContent += `<li><b>${"flavor text"}: </b><ul><li><span class='underlined'>author:</span> ${
          card["flavor text"]["author"]
        }</li></ul></li>`;
      }
    }
  }

  //Define Content
  content += `
  <ul>
    <li><b>${"name"}: </b>${card.name}</li>
    <li><b>${"launch cost"}: </b>${card["launch cost"]}</li>
    <li><b>${"type"}: </b>${card.type}</li>
    <li>${expansionContent}</li>
    ${abilitiesContent}
    ${flavorTextContent}
    <li><b>${"illustrator"}: </b>${card.illustrator}</li>
    <li><b>${"collection"}: </b>${card.collection}</li>
    <li><b>${"strength"}: </b>${card.strength}</li>
  </ul>`;

  return content;
}

//____________Parte 2____________*
/* Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
- Creiamo un mazzo di carte
- Stampiamo tutte  le carte su schermo
- Aggiungiamo un piccolo form in HTML
- Ragioniamo pian pianino sulla logica dei filtri

MINIMO RICHIESTO:
- Filtrare prima le proprietà con valori semplici (stringhe o numeri)
- Filtrare le proprietà il cui valore è un array di stringhe

BONUS:
- Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
- Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti) */

const deck = [
  {
    name: "Grizzly Bears",
    "launch cost": [1, "G"].join(", "),
    type: ["Creature", "Bear"].join(" - "),
    expansion: {
      edition: 10,
      rarity: "golden",
    },
    "flavor text": {
      text: "We cannot forget that among all of Dominaria's wonders, a system of life exists, with prey and predators that will never fight war nor vie for ancient power.",
      author: "Jolrael, empress of the beasts",
    },
    illustrator: "D. J. Cleland-Hura",
    collection: "268/383",
    strength: "2/2",
  },
  {
    name: "Krosan Cloudscaper",
    "launch cost": [7, "G", "G", "G"].join(", "),
    type: ["Creature", "Beast Mutant"].join(" - "),
    expansion: {
      edition: "Timeshifted",
    },
    abilities: [
      {
        "launch cost": ["G", "G"].join(", "),
        description:
          "At the beginning of your upkeep, sacrifice Krosan Cloudscraper unless you pay G G.",
      },
      {
        "launch cost": [7, "G", "G"].join(", "),
        description:
          "Morph 7 G G: You may cast this card face down as a 2/2 creature for 3. Turn it face up any time for its morph cost.",
      },
    ],
    illustrator: "Ron Spears",
    collection: "82/145",
    strength: "13/13",
  },
];

//Push the first card into the array
deck.push(firstCard);

//Print the deck
const displayDeck = document.getElementById("deck-container");
let currentCard;
let currentCardTemplate;
let deckTemplate = "";
for (let i = 0; i < deck.length; i++) {
  currentCard = deck[i];
  currentCardTemplate = createCardTemplate(currentCard);
  deckTemplate += "<div class='card'>" + currentCardTemplate + "</div>";
}
displayDeck.innerHTML = deckTemplate;

const userSelection = document.getElementById("research-category");
const userResearch = document.getElementById("research-bar");
const submitButton = document.getElementById("submit-research");

// - If selected "all" - toggle between showing and not showing the text input
userSelection.addEventListener("change", function () {
  const researchedValue = userResearch.value;
  const selectedValue = userSelection.value;
  if (selectedValue !== "all") {
    userResearch.classList.remove("hidden");
  } else {
    userResearch.classList.add("hidden");
  }
});

//Filter all the cards by users' selected cathegory and research
submitButton.addEventListener("click", function () {
  let deckTemplate = "";
  const researchedValue = userResearch.value;
  const selectedValue = userSelection.value;
  if (selectedValue === "all") {
    for (let i = 0; i < deck.length; i++) {
      currentCard = deck[i];
      currentCardTemplate = createCardTemplate(currentCard);
      deckTemplate += "<div class='card'>" + currentCardTemplate + "</div>";
    }
    displayDeck.innerHTML = deckTemplate;
    return "";
  }
  const filteredDeck = [];
  let filteredDeckTemplate = "";
  for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    if (currentCard[selectedValue] == researchedValue) {
      filteredDeck.push(currentCard);
    }
  }
  for (let i = 0; i < filteredDeck.length; i++) {
    filteredCard = filteredDeck[i];
    filteredCardTemplate = createCardTemplate(filteredCard);
    filteredDeckTemplate +=
      "<div class='card'>" + filteredCardTemplate + "</div>";
  }
  displayDeck.innerHTML = filteredDeckTemplate;
});
