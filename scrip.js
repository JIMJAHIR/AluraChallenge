document.querySelector("textarea").focus();
var cadenaEncriptada = "";
var cadenaDesencriptada = "";
var cadenaAuxiliar = "";
var textoSalida = "";

function Encriptar() {
    const texto = document.getElementById("texto-entrada").value;
    const cadena = texto.split("");
    const len = cadena.length;
    const resultado = [];

    for (let i = 0; i < len; i++) {
        const char = cadena[i];

        if ("aeiou".includes(char)) {
            switch (char) {
                case "a":
                    resultado.push("ai");
                    break;
                case "e":
                    resultado.push("enter");
                    break;
                case "i":
                    resultado.push("imes");
                    break;
                case "o":
                    resultado.push("ober");
                    break;
                case "u":
                    resultado.push("ufat");
                    break;
            }
        } else {
            resultado.push(char);
        }
    }

    const textoSalida = resultado.join("");
    document.getElementById("texto-salida").value = textoSalida;
    document.querySelector("textarea").focus();
    document.querySelector("textarea").value = "";

    document.getElementById("texto-salida").classList.remove("imagen-placeholder");
    document.getElementById("texto-salida").classList.add("sin-imagen-placeholder");



}

function Desencriptar() {
    var texto = document.getElementById("texto-entrada").value;
    var cadena = texto.split("");
    var cadenaDesencriptada = [];

    for (i = 0; i < cadena.length; i++) {

        if (cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u") {

            switch (cadena[i]) {
                case "a":
                    cadenaAuxiliar = "a";
                    cadenaDesencriptada.push(cadenaAuxiliar);
                    i++;
                    break;
                case "e":
                    cadenaAuxiliar = "e";
                    cadenaDesencriptada.push(cadenaAuxiliar);
                    i = i + 4;
                    break;
                case "i":
                    cadenaAuxiliar = "i";
                    cadenaDesencriptada.push(cadenaAuxiliar);
                    i = i + 3;
                    break;
                case "o":
                    cadenaAuxiliar = "o";
                    cadenaDesencriptada.push(cadenaAuxiliar);
                    i = i + 3;
                    break;
                case "u":
                    cadenaAuxiliar = "u";
                    cadenaDesencriptada.push(cadenaAuxiliar);
                    i = i + 3;
                    break;
            }

        }

        else {
            cadenaDesencriptada.push(cadena[i]);
        }
    }

    document.getElementById("texto-salida").value = cadenaDesencriptada.join("");
    document.querySelector("textarea").focus();
    document.querySelector("textarea").value = "";
}


function CopiarTexto() {
    navigator.clipboard.writeText(document.getElementById("texto-salida").value);
    document.querySelector("textarea").focus();
}

function Limpiar() {
    location.reload();
  }

var btnEncriptar = document.getElementById("Encriptar");
var btnDesencriptar = document.getElementById("Desencriptar");
var btnCopiar = document.getElementById("Copiar");
var btnLimpiar = document.getElementById("Limpiar");
btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = CopiarTexto;
btnLimpiar.onclick = Limpiar;
