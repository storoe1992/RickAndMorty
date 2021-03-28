import Personaje from './personaje.js'
import Serie from './serie.js'

const moduloIIFE =(() =>{
    let url = 'https://rickandmortyapi.com/api';
    let maxCantPersonajes = 0;
    const asyncronousFunction = async (api) => {
        let resultCall = await fetch(api);
        let result = await resultCall.json();
        return result.results;
    }
    return {
        funcionPublica1 : async () => {
            try{
                let serie = new Serie("Rick and Morty");
                let resultPrivateCalle = await asyncronousFunction(`${url}/character`);
                maxCantPersonajes = resultPrivateCalle.length;
                resultPrivateCalle.forEach(personaje => {
                    let personajeToAdd = new Personaje(personaje.id,personaje.name,personaje.species,personaje.image);
                    serie.addPersonaje(personajeToAdd);
                });
                serie.setupPersonajeCard("resultados")
            }catch(e){
                console.log(e);
            }
        },
        funcionPublica2 : () => {
            document.getElementsByClassName("spinner-border")[0].style.display = 'none';
            document.getElementById("cantidadPersonajes").innerHTML = maxCantPersonajes;
        } 
    }
})();

/**
 * No lo ejecuto secuencialmente porque puedo caer en una race condition tratando
 * de acceder al valor de la cantidad de personajes cuando el mismo puede no estar aún 
 * definido ya que esto ocurre dentro de la primera función que es asíncrona.
 */

moduloIIFE.funcionPublica1()
.then(() => setTimeout(() => moduloIIFE.funcionPublica2(),2000));
