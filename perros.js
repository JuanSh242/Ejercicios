/**=======================================================los Cuatro Perros
 *tenemos Cuatro  perros : Un Galgo , un  dogo , un alano y un podenco este ultimo come mas que el Galgo,
 el alano como mas que el galgo, y menos que el dogo,pero este como mas que el podenco | cual de los perro come menos?

 Podenco :4
 Dogo  : 3
 Alano  :2
 Galgo : 1
 */

 let perro = {
    podenco: 0,
    dogo:0,
    alano:0,
    galgo:0,

    resultado : function() {
        if( perro.podenco > perro.galgo &&
            perro.alano > perro.galgo &&
            perro.alano < perro.dogo &&
            perro.dogo < perro.podenco ){
                return true;
            }
            return false;
         },
         intervalo : setInterval(function(){
            perro.podenco = Math.ceil(Math.random()*4)
            perro.alano = Math.ceil(Math.random()*4)
            perro.dogo = Math.ceil(Math.random()*4)
            perro.galgo = Math.ceil(Math.random()*4)

            if(perro.resultado()){
                clearInterval(perro.intervalo);
                console.log("El Podenco",perro.podenco);
                console.log("El Alano",perro.alano);
                console.log("El Dogo",perro.dogo);
                console.log("El Galgo",perro.galgo);
            }
         },10)
        }