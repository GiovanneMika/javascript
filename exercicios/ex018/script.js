function contar() {
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);

    var res = document.getElementById("msg");
    if (document.getElementById("inicio").value != "" && document.getElementById("fim").value != "" && document.getElementById("passo").value != "") {
        res.innerHTML = "<p>Contando</p>";
        if(passo < 0){
            passo *= -1;
        }
        if (passo == 0){
            window.alert("Passo inválido. Considerando passo = 1!");
            passo = 1;
        }
        if (inicio <= fim) {
            for (c = inicio; c < fim; c += passo) {
                res.innerHTML += `${c} 👉`;
            }
        } else {
            for (c = inicio; c > fim; c -= passo) {
                res.innerHTML += `${c} 👉`;
            }
        }
        res.innerHTML += `🏁`;
    } else {
        res.innerHTML = `Preencha todos os campos!`;
    }
}