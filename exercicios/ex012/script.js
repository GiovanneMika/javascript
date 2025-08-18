var hora = new Date().getHours();
console.log(`Agora são ${hora} horas`);
if (!(hora < 0) && !(hora > 23)) {
    if (hora < 12 && hora >= 6) {
        console.log("Bom dia!");
    } else if (hora <= 18 && hora > 6) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!")
    }
} else {
    console.log("Digite uma hora válida!")
}