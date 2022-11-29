let textInput = document.querySelector("#input-texto");
let outInput = document.querySelectorAll("output");

let qnt = 1
document.querySelector('.numero_btn').innerHTML = qnt;
document.querySelector('.menos_btn').addEventListener('click', () => {
    if (qnt > 1) {
        qnt--;
    }
    document.querySelector('.numero_btn').innerHTML = qnt;
})
document.querySelector('.mais_btn').addEventListener('click', () => {
    qnt++;
    document.querySelector('.numero_btn').innerHTML = qnt;
})


function criptografar () {
    let texto = textInput.value;
    let texto1 = []
    for(i = 0; i < texto.length; i++) {
        texto1.push(String.fromCharCode(texto[i].charCodeAt(0) + qnt))
    }
    let resultCripto = texto1.join('')

    document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultCripto + '</textarea>' + '<button class="ntn-copiar" id="btn-copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar () {
    let texto = textInput.value;
    let texto1 = []
    for(i = 0; i < texto.length; i++) {
        texto1.push(String.fromCharCode(texto[i].charCodeAt(0) - qnt))
    }
    let resultDescripto = texto1.join('')

    document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultDescripto + '</textarea>' + '<button class="ntn-copiar" id="btn-copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {
    let textoCop = document.getElementById('teste');

    textoCop.select();
    document.execCommand('copy');
}