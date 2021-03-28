export default class Personaje{
    constructor(id,nombre,especie,img){
        let _id = id;
        let _nombre = nombre;
        let _especie = especie;
        let _img = img;
        
        this.getId = () => _id;
        this.getNombre = () => _nombre;
        this.getEspecie = () => _especie;
        this.getImg = () => _img;
    }

    get id(){
        return this.getId();
    }

    get nombre(){
        return this.getNombre();
    }

    get especie(){
        return this.getEspecie();
    }

    get img(){
        return this.getImg();
    }
}