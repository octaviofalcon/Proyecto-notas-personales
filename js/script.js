//Debo crear la clase nota con todos sus atributos
class Nota {
  //Constructor
  constructor(id, titulo, contenido, fecha) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.fecha = fecha;
  }
  //setters y getters
  setTitulo(titulo) {
    this.titulo = titulo;
  }
  getTitulo() {
    return this.titulo;
  }

  setContenido(contenido) {
    this.contenido = contenido;
  }
  getContenido() {
    return this.contenido;
  }
}

//Metodo de generacion random de ID

function generarId(length) {
  let idBox = document.getElementById("inpId");
  var id = "";
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var caracteresLength = caracteres.length;
  for (var i = 0; i < length; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
  }

  idBox.value = id;
}

//Metodo de agregar nota

function agregarNota() {
  id;
  titulo;
  contenido;
}
