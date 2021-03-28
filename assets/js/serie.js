export default class Serie{
    constructor(nombreSerie,personajes){
        this._nombreSerie = nombreSerie;
        this._personajes = personajes || [];
    }

    addPersonaje(personaje){
        this._personajes.push(personaje);
    }

    setupPersonajeCard(cardContainer){
        const container = document.getElementById(cardContainer);
        this._personajes.forEach(personaje => {
          let card = `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 text-center my-3">
                <div class="card mx-auto" style="width: 18rem;">
                    <img class="card-img-top" src="${personaje.img}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">${personaje.nombre}</p>
                        <p class="card-text">Especie: ${personaje.especie}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML+=(card);
        });
        
        
    }
}