
// Entrada de dados 
let nomeHeroi = "Arthus"; // Nome de exemplo
let xpHeroi = 7500;       // XP de exemplo
// Classificação do nível baseado no XP
let nivel = (xpHeroi < 1000) ? "Ferro" :
           (xpHeroi <= 2000) ? "Bronze" :
           (xpHeroi <= 5000) ? "Prata" :
           (xpHeroi <= 7000) ? "Ouro" :
           (xpHeroi <= 8000) ? "Platina" :
           (xpHeroi <= 9000) ? "Ascendente" :
           (xpHeroi <= 10000) ? "Imortal" : "Radiante";

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);