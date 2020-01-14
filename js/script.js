//Debo crear la clase nota con todos sus atributos
class Nota {
  //Constructor
  constructor(titulo, contenido, fecha) {
    this.id = generarId(20);
    this.titulo = titulo;
    this.contenido = contenido;
    this.fecha = obtenerFecha();
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
  var id = "";
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var caracteresLength = caracteres.length;
  for (var i = 0; i < length; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
  }

  return id;
}

//Metodo de agregar nota

function agregarNota() {
  titulo = document.getElementById("TituloInput");
  contenido = document.getElementById("TextoInput");
  //compruebo que no esten vacios
  if (titulo.value != "" && contenido.value != "") {
    const myNota = new Nota(titulo.value, contenido.value);
  }
  var notas = JSON.parse(localStorage.getItem("notas"));
  if (!notas) {
    notas = [];
  }
  //Compruebo si YA existe
  comprobarNota(myNota);

  //agregar
  notas.push(myNota);

  //usar localStorage set Item
  localStorage.setItem("notas", JSON.stringify(notas));
}

function comprobarNota(nota) {}

function obtenerFecha() {
  var today = new Date();
  var fechaYHora =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " - " +
    today.getHours() +
    ":" +
    today.getMinutes();
  return fechaYHora;
}
