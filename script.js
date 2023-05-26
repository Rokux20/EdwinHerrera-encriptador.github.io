var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneico = document.querySelector(".contenedor-muneico");
var resultado = document.querySelector(".texto-resultado");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultadoT = document.querySelector(".contenedor-resultado");
var botonCopiar = document.querySelector("contenedor-copiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// function ocultarAdelante(){
//     muneico.classList.add("ocultar");
//     contenedor.classList.add("ocultar");
    
// }

// function mostrar(){
//     resultadoT.classList.add("mostrar");
//     botonCopiar.classList.add("mostrar");
// }

// function encriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto();
//     resultado.textContent = encriptarTexto(cajatexto);
//     mostrar();
// }

// function desencriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto();
//     resultado.textContent = desencriptarTexto(cajatexto);
//      mostrar();
// }

// ... Código anterior ...

function ocultarAdelante() {
  muneico.classList.add("ocultar");
  contenedor.classList.add("ocultar");
  btnCopiar.classList.remove("mostrar");
}

function mostrar() {
  resultadoT.classList.add("mostrar");
  btnCopiar.classList.add("mostrar");
}

function encriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
  mostrar();
}

function desencriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
  mostrar();
}

// ... Resto del código ...

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}



function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
     
    for(var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal +"enter";
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal= textoFinal + texto[i];
        }
    }
    return textoFinal; 
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
  
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
        textoFinal = textoFinal + "a";
        i = i + 1;
      } else if (texto[i] == "e") {
        textoFinal = textoFinal + "e";
        i = i + 4;
      } else if (texto[i] == "i") {
        textoFinal = textoFinal + "i";
        i = i + 3;
      } else if (texto[i] == "o") {
        textoFinal = textoFinal + "o";
        i = i + 3;
      } else if (texto[i] == "u") {
        textoFinal = textoFinal + "u";
        i = i + 3;
      } else {
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
  }
  


// const btnCopiar = document.querySelector(".btn-copiar");
//     btnCopiar.addEventListener("click", copiar = () =>{
//         var contenido = document.querySelector(".texto-resultado").textContent;
//         navigator.clipboard.writeText(contenido);
//         console.log("holi uwu");
        
//     })

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar el texto:", error);
        });
});