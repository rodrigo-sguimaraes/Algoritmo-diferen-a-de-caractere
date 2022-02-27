const caractere = "r";

if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u" || caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    //se minúscula vem para esse escorpo
    if (caractere === caractere.toLowerCase()) {
        console.log("Vogal Minúscula.");
    }
    // se maiúscula vem para cá
    else {
        console.log("Vogal Maiúscula.");
    }
}
//possível solução se tivesse caracteres especiais, mas na questão não pede.
//else if (caractere == "#" || caractere == "$" || caractere == "%" || caractere == "*" || caractere != "@") {
//console.log("Caracteres especiais.");
//}
else {

    if (caractere == "0" || caractere == "1" || caractere == "2" || caractere == "3" || caractere == "4" || caractere == "5" || caractere == "6" || caractere == "7" || caractere == "8" || caractere == "9") {
        console.log("Número");
    }
    else {
        console.log("Consoante");
    }
}
