function encriptar() {
    //mostramos boton de copiar
    var boton = document.getElementById("copiar");
        if (resultado !== "") {
            boton.style.display = "block";
        } 

    //encriptamos texto

    var textoOriginal = document.getElementById('texto').value;
    var textoEncriptado = "";

    for (var i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoOriginal[i];
                break;
        }
    }

    //quitamos imagen cuando hay texto por encriptar

    ['muñeco', 'titulo-mensaje', 'parrafo1', 'parrafo2', 'parrafo3'].forEach(function(elementId) {
        var elemento = document.getElementById(elementId);
        if (elemento) {
            elemento.remove();
        }
    });

    //mostramos texto encriptado 
    
    document.getElementById('resultado').innerText = textoEncriptado;
}

function desencriptar() {
    //mostramos boton de copiar
    var boton = document.getElementById("copiar");
    if (resultado !== "") {
        boton.style.display = "block";
    } 

    //desencriptamos texto
    var textoEncriptado = document.getElementById('texto').value;
    var textoOriginal = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        if (textoEncriptado.substring(i, i + 5) === 'enter') {
            textoOriginal += 'e';
            i += 4;
        } else if (textoEncriptado.substring(i, i + 4) === 'imes') {
            textoOriginal += 'i';
            i += 3;
        } else if (textoEncriptado.substring(i, i + 2) === 'ai') {
            textoOriginal += 'a';
            i += 1;
        } else if (textoEncriptado.substring(i, i + 4) === 'ober') {
            textoOriginal += 'o';
            i += 3;
        } else if (textoEncriptado.substring(i, i + 4) === 'ufat') {
            textoOriginal += 'u';
            i += 3;
        } else {
            textoOriginal += textoEncriptado[i];
        }
    }

    //quitamos imagen cuando hay texto por desencriptar

    ['muñeco', 'titulo-mensaje', 'parrafo1', 'parrafo2', 'parrafo3'].forEach(function(elementId) {
        var elemento = document.getElementById(elementId);
        if (elemento) {
            elemento.remove();
        }
    });

    //mostramos texto

    document.getElementById('resultado').innerText = textoOriginal;
}


//boton de copiar texto

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(contenido);
});


