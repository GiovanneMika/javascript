let num = [5, 8, 9, 3, 83, 4, 7, 20];
let numSorted = [...num].sort((a, b) => a - b);
console.log(`Nosso vetor é o ${num}. Ele tem ${num.length} posições e ordenado fica ${numSorted}\n`);
console.log(`O primeiro valor é ${num[0]} e o último valor é ${num[num.length - 1]}\n`);
var busca = num.indexOf(8);
console.log(`A posição do valor 8 é a ${busca + 1}° \n`);



// for (pos = 0; pos<num.length; pos++){
//     console.log(`O valor na ${pos+1}° posição é ${num[pos]}`);
// }

for (var pos in num) {
    console.log(`O valor na ${Number(pos) + 1}° posição é ${num[pos]}`);
}