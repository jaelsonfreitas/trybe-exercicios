// exercicios sobre operadores Lógicos
// true e false
// and ou &&

const comida = "Pão na chapa" ;
const bebida = 'Cafézinho';
if (bebida === 'Cafézinho' && comida == 'Pão na chapa') {
    console.log('Muito Obrigado pela refeição ;)');
}
else {
    console.log('Acho que houve um engano no eu pedido.')
}

const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;
const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false