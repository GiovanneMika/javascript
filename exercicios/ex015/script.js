function verificarIdade() {
    var idade = Number(document.getElementById("idade").value);
    var sexo = document.getElementById("sexom").checked ? "homem" : "mulher";
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var ano = new Date().getFullYear();

    if (idade > ano || idade < 1900) {
        window.alert("Insira uma idade válida!");
    } else {
        idade = ano - idade;
        console.log(idade);
        msg.innerHTML = `<p>Detectamos ${sexo} com ${idade} anos.</p>`

        if (sexo == "homem") {
            if (idade <= 13) {
                img.innerHTML = `<img src="images/menino.jpg" alt=""></img>`;
            } else if (idade < 30) {
                img.innerHTML = `<img src="images/rapaz.jpg" alt=""></img>`;
            } else if (idade < 50) {
                img.innerHTML = `<img src="images/homem.jpg" alt=""></img>`;
            } else {
                img.innerHTML = `<img src="images/idoso.jpg" alt=""></img>`;
            }
        } else {
            if (idade < 16) {
                img.innerHTML = `<img src="images/menina.jpg" alt=""></img>`;
            } else if (idade < 30) {
                img.innerHTML = `<img src="images/moca.jpg" alt=""></img>`;
            } else if (idade < 50) {
                img.innerHTML = `<img src="images/mulher.jpg" alt=""></img>`;
            } else {
                img.innerHTML = `<img src="images/idosa.jpg" alt=""></img>`;
            }
        }
    }
}