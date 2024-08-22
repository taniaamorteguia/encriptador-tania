function encriptar(){
    let texto = document.getElementById('texto__inicial')
    let newtext = document.getElementById('texto__final') 
    newtext.textContent = reemplazarVocales(texto.value)

}

function desencriptar(){
    let texto = document.getElementById('texto__inicial')
    let newtext = document.getElementById('texto__final') 
    newtext.textContent = reemplazarEncriptacion(texto.value)
}

function copiar(){
   let textoCopiado = document.getElementById('texto__final');
   let texto = textoCopiado.innerText || textoCopiado.textContent;

   navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado al portapapeles:', texto);
    })
    .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
    });
}

function reemplazarVocales(texto) {
    // Definimos valores para las vocales
    const valoresVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Usamos una expresión regular para buscar todas las vocales en el texto
    return texto.replaceAll(/[aeiou]/g, function(match) {
        // Devolvemos el texto correspondiente para cada vocal
        return valoresVocales[match];
    });
}

function reemplazarEncriptacion(texto) {
    // Definimos valores para desencriptar las vocales
    const valoresEncriptacion = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    };
    for (const [clave, valor] of Object.entries(valoresEncriptacion)) {
        // Creamos una expresión regular global para cada clave
        const regex = new RegExp(clave, 'g');
        // Reemplazamos todas las ocurrencias de la clave por su valor correspondiente
        texto = texto.replaceAll(regex, valor);
    } 

    return texto;
    
}

function desaparecer(){
        const input = document.getElementById('texto__inicial');
        const imagen = document.getElementById('img');
        const mensaje1 = document.getElementById('mensaje1');
        const mensaje2 = document.getElementById('mensaje2');

        // Agrega un listener para el evento 'input'
        input.addEventListener('input', function() {
            // Actualiza el contenido del párrafo con el valor del input
            if (input.value.trim() === "") {
                imagen.style.display = "block"; 
                mensaje1.style.display = "block"; 
                mensaje2.style.display = "block"; 
            } else {
                imagen.style.display = "none"; 
                mensaje1.style.display = "none"; 
                mensaje2.style.display = "none"; 
            }
        });
    }

document.addEventListener('DOMContentLoaded', function() {
    desaparecer();
});