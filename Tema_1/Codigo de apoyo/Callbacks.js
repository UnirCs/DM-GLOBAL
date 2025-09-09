let saludo = () => {
    console.log("Hello there!");
}
saludo.from = "Obi-Wan Kenobi";

console.log(saludo.name);
console.log(saludo.from);
console.log(saludo.to);

saludo();

saludo = () => {
    console.log("Hello there from Tatooine!")
}
saludo();


/**
 * Callbacks
 * 
 * Un callback es algo tan simple como pasar como argumento a una función otra función
 * Esto puede parecer una locura en algunos lenguajes de programacion
 * En JS las funciones SON OBJETOS. Si las definimos con modificadores, se recomienda usar const.
 */
const isPar = (n, parCallBack, imparCallback) => {
    if (n%2 === 0) {
        parCallBack();
    } else {
        imparCallback();
    }
}
isPar(4, () => console.log("El numero es par"));
//isPar(5, () => console.log("El numero es par"));

const parCallBack = () => console.log("El numero es par");
const imparCallBack = () => console.log("El numero es impar");

isPar(6, parCallBack, imparCallBack);
isPar(7, parCallBack, imparCallBack);

/**
 * Funciones de orden superior
 *
 * Son funciones que reciben como argumento otras funciones o devuelven funciones
 * Un ejemplo es el método filter de los arrays
 * Este método recibe una función como argumento que se aplica a cada elemento del array
 * Si la función devuelve true, el elemento se incluye en el nuevo array
 * Si devuelve false, no se incluye
 */
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = numeros.filter(n => n%2 === 0);
const esImpar = n => n%2 !== 0;
let numerosImpares = numeros.filter(esImpar);
console.log(numerosPares);
console.log(numerosImpares);
