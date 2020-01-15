//Debo crear la clase nota con todos sus atributos
class Nota {
  //Constructor
  constructor(titulo, contenido) {
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
  let myNota;
  //compruebo que no esten vacios
  if (titulo.value != "" && contenido.value != "") {
    myNota = new Nota(titulo.value, contenido.value);
  }
  let notas = JSON.parse(localStorage.getItem("notas"));
  if (!notas) {
    notas = [];
  }
  //Compruebo si YA existe
  comprobarNota(titulo);
  //agregar
  if(!comprobarNota(titulo.value)){
    notas.push(myNota);
    //usar localStorage set Item
  localStorage.setItem("notas", JSON.stringify(notas));
  //Aviso que el proceso fue exitoso
  window.alert('Su nota se ha guardado exitosamente')
} else{
  window.alert('Titulo ya existente. Intente con uno diferente')
}

  

   //Vacio el formulario
   titulo.value = '';
   contenido.value = '';
}



function comprobarNota(titulo) {
  let notas = JSON.parse(localStorage.getItem("notas"));
 var match = false;
if(!notas){
  return false;
}else{
  match = notas.find(nota => nota.titulo == titulo);
  }

     return match;
  }




  //Listar notas
  //necesito mostrar la lista y vincularla a la tabla
function mostrarNotas(){
  let myTabla = document.getElementById('tablaBody');
  let notas = JSON.parse(localStorage.getItem('notas'));
  if (!notas){
    notas=[];

  }
  //Inicializo la tabla vacia
  // myTabla="";


  //la tabla debe incrementar (debe ser igual a tabla + el contenido que yo le sume)
  
  for(let i=0; i<notas.length; i++){
  myTabla.innerHTML+= `<tr><td>${i+1}</td><td>${notas[i].titulo}</td><td>${notas[i].contenido}</td><td>${notas[i].fecha}</td></tr>`;
}

}



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

mostrarNotas();
