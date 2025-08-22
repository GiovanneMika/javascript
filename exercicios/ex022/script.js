
let lista = [];
let mensagem = document.getElementById('msg');
let quadro = document.getElementById('quadro');
let numeroElem = document.getElementById("numero");
let maximo = 100;
let minimo = 1;
function adicionar() {
    let numero = Number(numeroElem.value);
    if (numero > maximo || numero < minimo || numeroElem.value == "") {
        window.alert("Digite entre o intervalo pedido!");
    } else {
        if (!lista.includes(numero)) {
            let opcao = document.createElement("option");
            lista.push(numero);
            opcao.textContent = `Valor ${numero} adicionado!  `;
            quadro.append(opcao);
        } else {
            window.alert("Esse número já está na lista!");
        }
    }
    lista.length > 6 && lista.length < 14 ? quadro.setAttribute("size", lista.length) : "";
    numeroElem.value = "";
    mensagem.innerHTML = "";
}

function finalizar() {
    if (lista.length != 0) {
        lista.sort((a, b) => a - b);
        mensagem.innerHTML = "";
        mensagem.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`;
        mensagem.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}.</p>`;
        mensagem.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`;
        mensagem.innerHTML += `<p>Somando todos os valores temos ${somarLista(lista)}.</p>`;
        mensagem.innerHTML += `<p>A média dos valores digitados é ${mediaLista(lista).toFixed(2)}.</p>`;
    } else {
        window.alert("Adicione valores antes de finalizar!");
    }
}

function limpar() {
    lista = [];
    quadro.innerHTML = '';
    mensagem.innerHTML = "";
    numeroElem.value = "";
    quadro.setAttribute("size", 6);
}

function somarLista(lista) {
    let soma = 0;
    for (let c = 0; c < lista.length; c++) {
        soma += Number(lista[c]);
    }
    // for (let c in lista) {
    //     soma += lista[Number(c)];
    // }
    console.log(soma);

    return soma;
}

function mediaLista(lista) {
    return somarLista(lista) / lista.length;
}

function aleatorio() {
    let numRand = 0;
    do {
        numRand = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if (lista.length == maximo) {
            window.alert("A lista chegou no máximo!");
            return;
        }
    } while (lista.includes(numRand));
    numeroElem.value = numRand;
    adicionar();
}

