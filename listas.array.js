// listas, array o arreglo 
const lista  = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista); 
console.log(lista2);
console.log(lista3)
console.log(lista4)

//objectos
const movil ={
    altura: 10,
    anchura: 5,
    marca: "iphone",
    isWhite: false,
    contactos: ["tony", "martin", "jorge"],
    tarjeta: {
        marca: "sandisk"
        
    }

}

console.log(movil.tarjeta)

// fecha
// libreria de apollo moment.js
const ahora = new Date
console.log(ahora);
 