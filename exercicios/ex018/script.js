
var inicioElem = document.getElementById("inicio");
var fimElem = document.getElementById("fim");
var passoElem = document.getElementById("passo");
var res = document.getElementById("msg");
function contar() {
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);
    if (document.getElementById("inicio").value != "" && document.getElementById("fim").value != "" && document.getElementById("passo").value != "") {
        res.innerHTML = "<p>Contando</p>";
        if (passo < 0) {
            passo *= -1;
        }
        if (passo == 0) {
            window.alert("Passo inválido. Considerando passo = 1!");
            passo = 1;
        }
        if (inicio <= fim) {
            for (c = inicio; c < fim; c += passo) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        } else {
            for (c = inicio; c > fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    } else {
        res.innerHTML = `Preencha todos os campos!`;
    }
}


function aleatorizar() {
    var inicio = Math.floor(Math.random() * (1000 - -1000)) + -1000;
    var fim = Math.floor(Math.random() * (1000 - -1000)) + -1000;
    var passo;
    if (fim > inicio) {
        passo = Math.floor(Math.random() * 250);
    } else {
        passo = Math.floor(Math.random() * 250);
    }

    inicioElem.value = inicio;
    fimElem.value = fim;
    passoElem.value = passo;
    contar();
}


function limpar() {
    inicioElem.value = "";
    fimElem.value = "";
    passoElem.value = "";
    res.value = "";
    res.innerHTML = "";
}