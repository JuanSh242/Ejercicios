//funciones declaradas

/** SOn funciones que requiere identificadores son de color azul
 * funtion(este es la funcion) saludo(este es el identificador) ()(se usa para invocar ;la funcion)
 funtion saludo (){
    Console.log("Hola Soy Juan")
 }

 saludar ()// la estasmos declarada puede ir arriba o abajo
 */

 //Exprecion funcional 
 /** consiste en asociar una variable a una funcion
  * puede tener un nombre o ser anonima y lo que se alza es la declarancion no la asignacion
  ej:
  const saludo = funtion(){
    console.log("Hola juan")
  }
  saludo()
  es este tipo las funciones son valor di declaramos funcion antes de la funcion nos dara error debido a que esta
  funcion es mas explicita ya que es un valor no podemos declarar antes por que es Undefaind
  */

  //Declaracion de funciones
  /**
   * const saludar = () => {
   consele.log("hola todos")}
   saludar()
   esta es todo es mas que todo usada en funciones con solo un valor o mas concretas hay que tener cuidaod 
   ya que son tan cortas que habes es facil perder el hilo de lo que estas haciendo no contienen this y eso es peligroso 
   */

   const mayuscula = (nombre) => nombre.toUpperCase()
   
   const nombre = mayuscula("juan")

   console.log(nombre)

   //esta es la funcion flecha que se esta utilizando mas a menudo ahora es mas corta pero es facil perderse de lo que estas haciendo
   //no es recomendada para mi en este momento