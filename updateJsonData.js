const fs = require('fs');

// Lecture du contenu actuel du fichier db.json
const jsonData = fs.readFileSync('db.json', 'utf-8');
const data = JSON.parse(jsonData);

// Ajout de nouvelles données
const newData = { id: 1, name: 'Nouvelle donnée' };
data.push(newData);

// Écriture de la mise à jour dans le fichier db.json
const updatedJsonData = JSON.stringify(data, null, 2);
fs.writeFileSync('db.json', updatedJsonData, 'utf-8');

console.log('Mise à jour du fichier db.json effectuée.');
