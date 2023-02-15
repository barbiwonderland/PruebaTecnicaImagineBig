/* PRUEBA TECNICA PARTE 1 ALGORITMOS */
/* 
A) Crear un algoritmo que muestre los números pares entre el 0 y el 100.
 */

const mostrarNumerosPares = () => {
  console.log("Numeros pares del 0 al 100 inclusive:")
  //si se quiere hacer exclusivo le cambiamos el i<100 en el bucle for
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

mostrarNumerosPares()

////////////////////////////////////////////////////////////////////////
/* B) JavaScript ES6: Dados los siguientes array's,
 imprimir por consola los elementos del array “y” que no se encuentran en el array “x” 
 utilizando para tal fin una única línea de código.
 */
const x = ["n", "bro", "c", "|"]
const y = ["d", "n", "l", "bro", "g"]
// Tu código aquí -> (...)
const result = y.filter((e) => !x.includes(e))
console.log("Resultado ejercicio 2:")
console.log(result)
