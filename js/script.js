

//Debo crear la clase nota con todos sus atributos
class Nota{
//Constructor
    constructor(id, titulo, contenido, fecha){
        this.id=id;
        this.titulo=titulo;
        this.contenido=contenido;
        this.fecha=fecha;

    }
//setters y getters
    setTitulo(titulo){
        this.titulo=titulo;
    }
    getTitulo(){
        return this.titulo;
    }
    
    setContenido(contenido){
        this.contenido=contenido;
    }
    getContenido(){
        return this.contenido;
    }


    //metodo agregar nota

    
}