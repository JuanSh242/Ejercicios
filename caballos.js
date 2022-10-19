/**CABALLOS
 * el caballo de Math es mas oscuro que el de Smith pero mas rapido y viejo que el de Jack
 * Que es aun mas lento que el de Wally que es mas joven que el de Mac, que es mas viejo que el de Smith
 * que es mas claro que el de Wally aunque el de jack es mas lento y oscuro que  el de Smith / Cual es el mas viejo ? el mas lento y 
 * el mas claro?
 * 1 el mas bajo y 2 el mas alto 
 Math |Edad   Viejo 2 | Velocidad Rapido 2 |Tono Oscuro 2
 Smith| Edad joven 1| Velocidad  Rapido 2|Tono Claro 1
 Jack |Edad  joven 1| Velocidad lento 1 |Tono oscuro 2
 wally|Edad joven 1|Velocidad rapido 2 |Tono oscuro 2
*/
///comensamos colocando los datos y operadores
/** ademas de eso aqui ponemos las propiedades como 0 es devido a que el enunciado nos esta diciendo comparar
 * (mas) por lo que usamos propiedades de comparacion osea numeros esta en 0 por que la funcion dara el valor
 */
let caballos = {
    
    Mac: {
        Edad:0,
        Velocidad:0,
        Tono:0,
    },

    Smith: {
        Edad:0,
        Velocidad:0,
        Tono:0,
    },

    Jack: {
        Edad:0,
        Velocidad:0,
        Tono:0,
    },

    Wally: {
        Edad:0,
        Velocidad:0,
        Tono:0,
    },
    
    resultado : function(){

        if(
            caballos.Mac.Tono > caballos.Smith.Tono &&
            caballos.Mac.Velocidad > caballos.Jack.Velocidad &&
            caballos.Mac.Edad > caballos.Jack.Edad &&
            caballos.Wally.Velocidad > caballos.Jack.Velocidad &&
            caballos.Mac.Edad > caballos.Wally.Edad &&
            caballos.Mac.Edad > caballos.Smith.Edad &&
            caballos.Wally.Tono >caballos.Smith.Tono &&
            caballos.Smith.Velocidad > caballos.Jack.Velocidad &&
            caballos.Jack.Tono > caballos.Smith.Tono 
            ){
            return true;
        }
        return false;
    },

    intervalo: setInterval(function(){

        caballos.Mac.Edad = Math.ceil(Math.random()*2);
        caballos.Mac.Velocidad = Math.ceil(Math.random()*2);
        caballos.Mac.Tono = Math.ceil(Math.random()*2);

        caballos.Smith.Edad = Math.ceil(Math.random()*2);
        caballos.Smith.Velocidad = Math.ceil(Math.random()*2);
        caballos.Smith.Tono = Math.ceil(Math.random()*2);

        caballos.Jack.Edad = Math.ceil(Math.random()*2);
        caballos.Jack.Velocidad = Math.ceil(Math.random()*2);
        caballos.Jack.Tono = Math.ceil(Math.random()*2);

        caballos.Wally.Edad = Math.ceil(Math.random()*2);
        caballos.Wally.Velocidad = Math.ceil(Math.random()*2);
        caballos.Wally.Tono = Math.ceil(Math.random()*2);

        if(caballos.resultado()){

        
        clearInterval(caballos.intervalo);
        console.log("Caballo de Mac",caballos.Mac);
        console.log("Caballo de Smith",caballos.Smith);
        console.log("Caballo de Jack",caballos.Jack);
        console.log("Caballo de Wally",caballos.Wally);
        }
    },1)
} 