var diaSem = new Date().getDay();
var diaExtenso;

switch(diaSem){
    case 0:
        diaExtenso = "Domingo";
        break;
    case 1:
        diaExtenso = "Segunda-feira";
        break;
    case 2:
        diaExtenso = "Terça-feira";
        break;
    case 3:
        diaExtenso = "Quarta-feira";
        break;
    case 4:
        diaExtenso = "Quinta-feira";
        break;
    case 5:
        diaExtenso = "Sexta-feira";
        break;
    case 6:
        diaExtenso = "Sábado";
        break;
    default:
        diaExtenso = "Dia inválido";
        break;
}
console.log(`Hoje é ${diaExtenso}`);