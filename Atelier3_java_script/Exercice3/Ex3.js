
const text = `bonjour
informatique
hello
ici
soleil`;
const lignes = text.split("\n");

const lignesMajuscules = lignes.map(function(ligne) {
  return ligne.toUpperCase(); 
});

const lignesFiltrees = lignesMajuscules.filter(function(ligne) {
  return ligne.includes("I"); 
});

for (let i = 0; i < lignesFiltrees.length; i++) {
  console.log(lignesFiltrees[i]); 
}



