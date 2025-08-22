function gerarTabuada() {
    var numero = Number(document.getElementById("numero").value);
    var resultado = document.getElementById('tabuada');
    var c = 0;
    if (document.getElementById("numero").value != "") {
        resultado.innerHTML = '';
        while (c <= 10){
            var opcao = document.createElement('option');
            opcao.textContent = `${numero} x ${c} = ${c*numero}`;
            opcao.value = `tab${c}`;
            resultado.appendChild(opcao);
            c++;
        }
    }else{
        alert('[ERRO] Por favor, digite um número!');
    }
}