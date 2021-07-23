/* Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)

BONUS: provare a creare una funzione che stampi la carta in pagina. */

//Initial variables
const display = document.getElementById("display");

//Collect card information in an object
const card = {
  name: "Bloodfire Colossus",
  "launch cost": [6, "R", "R"],
  type: {
    cathegory: "creature",
    "sub-category": "Giant",
  },
  expansion: {
    edition: 9,
    rarity: "golden",
  },
  abilities: {
    "launch cost": "R",
    name: "Sacrifice Bloodfire Colossus",
    description:
      "Bloodfire Colossus deals 6 damage to each creature and each player.",
  },
  "flavor text": {
    text: "It took all its strength to contain the fire within.",
    author: "",
  },
  illustrator: "Greg Smith",
  collection: "177/350",
  strength: "13/13",
};

console.log(card);

//Define nested objects outside the function
let typeContent = `<strong>${"type"}:</strong><ul><li><span> cathegory:</span> ${card.type.cathegory}</li>`;
typeContent += `<li><span>sub-category:</span> ${
  card.type["sub-category"]
}</li></ul>`;

let expansionContent = `<strong>${"expansion"}:</strong><ul><li><span>edition:</span> ${card.expansion.edition}</li>`;
expansionContent += `<li><span>rarity:</span> ${
  card.expansion.rarity
}</li></ul>`;

let abilitiesContent = `<strong>${"abilities"}:</strong><ul><li><span>launch cost:</span> ${card.abilities["launch cost"]}</li>`;
abilitiesContent += `<li><span>name:</span> ${card.abilities.name}</li>`;
abilitiesContent += `<li><span>description:</span> ${card.abilities.description}</li></ul>`;

let flavorTextContent = `<strong>${"flavor text"}: </strong><ul><li><span>text:</span><em> ${card["flavor text"].text}</em></li>`;
flavorTextContent += `<li><span>author:</span> ${card["flavor text"]["author"]
}</li></ul>`;

//Functions
function printCard(card) {
  let content = "<ul>";

  content += `<li><strong>${"name"}: </strong> ${card.name}</li>`;

  content += `<li><strong>${"launch cost"}: </strong>${
    card["launch cost"]
  }</li>`;

  content += `<li>${typeContent}</li>`;
  content += `<li>${expansionContent}</li>`;
  content += `<li>${abilitiesContent}</li>`;
  content += `<li>${flavorTextContent}</li>`;

  content += `<li><strong>${"illustrator"}: </strong> ${card.illustrator}</li>`;

  content += `<li><strong>${"collection"}: </strong> ${card.collection}</li>`;

  content += `<li><strong>${"strength"}: </strong> ${card.strength}</li>`;

  content += "</ul>";

  display.innerHTML = content;
}

//Print the card
printCard(card);