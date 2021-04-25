alert ('saludos, ¡Bienbenido al perro que pizza!');
alert ('¿Que deseas comer: pizza o perro?');

//En esta variable se guarda lo que el cliente escoge

let orden = prompt("escriba el producto que desee:");

let perroPrice = 5;
let pizzaPrice = 10;

if (orden === 'perro') {
    alert ("escogiste" + orden + 'su precio es' + perroPrice + ". ve a la caja por favor.");

}

if (orden === 'pizza') {
    alert ("escogiste" + orden + 'su precio es' + pizzaPrice + ". ve a la caja por favor.");

}