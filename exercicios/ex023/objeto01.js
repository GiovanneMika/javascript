let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }
};
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);


amigo.engordar(10);

console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`);