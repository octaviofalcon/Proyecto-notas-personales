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
  comprobarNota(titulo);
  //agregar
  if(comprobarNota(titulo)==true){
    notas.push(myNota);
  }
  
  //usar localStorage set Item
  localStorage.setItem("notas", JSON.stringify(notas));

   //Vacio el formulario
   id.value = '';
   titulo.value = '';
   texto.value = '';
   //Aviso que el proceso fue exitoso
   window.alert('Su nota se ha guardado exitosamente')
}



function comprobarNota(titulo) {
 var match = false;
  for (let i = 0; i < notas.length; i++) {
      if (notas[i].titulo == titulo.value) {
          match = true;
      }
  } 
    if(match==true){
      alert('Ese titulo ya existe. Intente con otro')
    }
     return match;
  }




  //Listar notas
  //necesito mostrar la lista y vincularla a la tabla
function mostrarNotas(notas){
  let myTabla = document.getElementById('tablaBody').innerHTML;
  let notas = JSON.parse(localStorage.getItem('notas'));
  if (notas==null || notas==undefined || notas==0){
    notas=[];

  }
  //Inicializo la tabla vacia
  myTabla="";


  //la tabla debe incrementar (debe ser igual a tabla + el contenido que yo le sume)
  
  for(let i=0; i<notas.length; i++){
  myTabla+= `<tr><td>${notas[i].titulo}</td> <td>${notas[i].contenido}</td> <td>${notas[i].fecha}`
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
