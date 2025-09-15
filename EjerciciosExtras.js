//Gestión de inventario de una tienda 
//Eres encargado de una tienda y tienes un inventario inicial de productos. La 
//lista de productos es: 
//let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
//Debes realizar las siguientes acciones: 
//1. Agregar un nuevo producto "Impresora" al inventario usando el método adecuado. 
//2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado. 
//3. Eliminar el primer producto del inventario. 
//4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas. 

let inventario = ['Laptop', 'Teclado', 'Mouse', 'Monitor'];
inventario.push('Impresora');

if (inventario.includes('Tablet')) {
    console.log('La tablet está en el inventario.');
} else {
    console.log('La tablet no está en el invetario.');
}

let eliminado = inventario.shift();
console.log(`Producto eliminado: ${eliminado}`);
console.log('Inventario actualizado: ', inventario.join(' , '));

// Clasificación de palabras según su longitud 
// Tienes una lista de palabras en una oración. Debes: 
// 1. Dividir la oración en palabras individuales. 
// 2. Clasificar las palabras en dos categorías: 
// ▪ Cortas (menos de 5 letras) 
// ▪ Largas (5 letras o más) 
// 3. Mostrar ambas listas de palabras clasificadas. 
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

let oracion = 'JavaScript es un lenguaje poderoso y versátil';
let palabras = oracion.split(' ');
let cortas = [];
let largas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length < 5){
        cortas.push(palabras[i]);
    } else {
        largas.push(palabras[i]);
    }
}
console.log('Palabras cortas (<5 letras): ', cortas);
console.log('Palabras largas (>=5 letras): ', largas);

// Simulador de una cola de atención al cliente 
// Simula una cola de atención al cliente donde los clientes llegan y son 
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
// bucle que los atiende de a uno. Realiza lo siguiente: 
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por 
// consola. 
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando 
// un mensaje especial. 
// 3. Al final, muestra cuántos clientes fueron atendidos en total. 
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]. 

let clientes = ['Ana', 'Carlos', 'VIP', 'Sofía', 'Juan'];
let atendidos = 0;

while (clientes.length > 0) {
    let cliente = clientes.shift();
    atendidos++;
    if (cliente === 'VIP'){
        console.log(`Atención PRIORITARIA para ${cliente}`);
    } else {
        console.log(`Atendiendo a ${cliente} `);
    }
}
console.log(`Total de clientes atendidos: ${atendidos}`);