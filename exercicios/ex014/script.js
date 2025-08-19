var hora = new Date().getHours();
document.getElementById("hora").innerText = `Agora são ${hora} horas.`;
if (!(hora < 0) && !(hora > 23)) {
    if (hora < 12 && hora >= 6) {
        document.querySelector("body").style.backgroundColor = 'var(--dia)';
        document.querySelector("img").src = "images/manha.jpg";
    } else if (hora <= 18 && hora > 6) {
        document.querySelector("body").style.backgroundColor = 'var(--tarde)';
        document.querySelector("img").src = "images/tarde.jpg";
    } else {
        document.querySelector("body").style.backgroundColor = 'var(--noite)';
        document.querySelector("img").src = "images/noite.jpg";
    }
}