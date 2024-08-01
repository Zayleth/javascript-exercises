const removeFromArray = function(array, ...theArgs) {
    return array.filter(element => !theArgs.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;


/*
array = array's name
array.filter -> method que crea un nuevo arreglo filtrando los elementos del arreglo original (array) basado en una condición.
element = parametro que acepta el (metodo filter) y representa cada elemento de mi array original (array).

la condicion -
!theArgs.includes(element)

explica que -
Si el elemento no está en theArgs, la función devuelve true e imprime el valor tal cual.
Si el elemento está en theArgs, la función devuelve false y elimina el valor del arreglo.

Ex - 
expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
*/