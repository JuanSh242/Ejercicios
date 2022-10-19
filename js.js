//ejercicios
/** Ejericio uno
 * de cuatro corredores se sabe de atletismo se sabe que C ha llegado inmediatamente detras 
 * de B y D ha llegado en medio de A y C Podrias calcular el orden de llegada
 * B primero 
 * C Segundo
 * D tercero 
 * A Cuarto
 */
//--------------------------------------

let corredor = {
    A:0,
    B:0,
    C:0,
    D:0,

//aqui acemos la condicions para resolver el enunciado si se comple nos arrojara la respuesta osea true si no se cumple no nos dara respues  las condiciones son B 1 C2 D2 A4
resultado : function() {
    if( corredor.C > corredor.B && 
        corredor.D > corredor.B &&
        corredor.D > corredor.C &&
        corredor.D < corredor.A){
            return true;
        }
        return false;
 },
//hacemos el invervalo para que los numeros aparescan.
intervalo: setInterval(function(){
//esta propiedad le da numero alaterios del 0 al 4 y la propiedad ceil le redondea hacia arriba floor hacia abajo
    corredor.A = Math.ceil(Math.random()*4)
    corredor.B = Math.ceil(Math.random()*4)
    corredor.C = Math.ceil(Math.random()*4)
    corredor.D = Math.ceil(Math.random()*4)

    if(corredor.resultado()){
        clearInterval(corredor.intervalo);
        console.log("Atleta A",corredor.A)
        console.log("Atleta B",corredor.B)
        console.log("Atleta C",corredor.C)
        console.log("Atleta D",corredor.D)
    }
},10)

}