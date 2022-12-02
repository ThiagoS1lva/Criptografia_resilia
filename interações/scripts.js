document.getElementById('2').classList.remove('selected')
document.getElementById('2').classList.add('base64')
document.getElementById('1').classList.remove('cifraCesar')
document.getElementById('1').classList.add('selected')
document.querySelector('.btn_area').style.display = 'flex';

let textInput = document.querySelector("#input-texto");
let outInput = document.querySelectorAll("output");

//FUNÇÃO DOS BOTOES
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
//--------------------------------------------------------------------------------
// FUNÇÃO CRIPTOGRAFAR
document.querySelector('.criptografar').addEventListener('click', () => {
    let texto = textInput.value;
    let texto1 = []
    for (i = 0; i < texto.length; i++) {
        texto1.push(String.fromCharCode(texto[i].charCodeAt(0) + qnt))
    }
    let resultCripto = texto1.join('')

    document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultCripto + '</textarea>'
})
//-----------------------------------------------------------------------------------
// DESFUNÇÃO CRIPTOGRAFAR
document.querySelector('.descriptografar').addEventListener('click', () => {
    let texto = textInput.value;
    let texto1 = []
    for (i = 0; i < texto.length; i++) {
        texto1.push(String.fromCharCode(texto[i].charCodeAt(0) - qnt))
    }
    let resultDescripto = texto1.join('')

    document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultDescripto + '</textarea>'
})


//------------------------------------------------------------


document.getElementById('1').addEventListener('click', () => {
    document.getElementById('2').classList.remove('selected')
    document.getElementById('2').classList.add('base64')
    document.getElementById('1').classList.remove('cifraCesar')
    document.getElementById('1').classList.add('selected')
    document.querySelector('.btn_area').style.display = 'flex';

    let textInput = document.querySelector("#input-texto");
    let outInput = document.querySelectorAll("output");

    //FUNÇÃO DOS BOTOES
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
    //--------------------------------------------------------------------------------
    // FUNÇÃO CRIPTOGRAFAR
    document.querySelector('.criptografar').addEventListener('click', () => {
        let texto = textInput.value;
        let texto1 = []
        for (i = 0; i < texto.length; i++) {
            texto1.push(String.fromCharCode(texto[i].charCodeAt(0) + qnt))
        }
        let resultCripto = texto1.join('')

        document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultCripto + '</textarea>'
    })
    //-----------------------------------------------------------------------------------
    // DESFUNÇÃO CRIPTOGRAFAR
    document.querySelector('.descriptografar').addEventListener('click', () => {
        let texto = textInput.value;
        let texto1 = []
        for (i = 0; i < texto.length; i++) {
            texto1.push(String.fromCharCode(texto[i].charCodeAt(0) - qnt))
        }
        let resultDescripto = texto1.join('')

        document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultDescripto + '</textarea>'
    })
})

// FUNÇÃO BASE64
document.getElementById('2').addEventListener('click', () => {
    document.getElementById('1').classList.remove('selected')
    document.getElementById('1').classList.add('cifraCesar')
    document.getElementById('2').classList.remove('base64')
    document.getElementById('2').classList.add('selected')
    document.querySelector('.btn_area').style.display = 'none';

    let textInput = document.querySelector("#input-texto");
    let outInput = document.querySelectorAll("output");

    //CRIPTOGRAFAR
    document.querySelector('.criptografar').addEventListener('click', () => {
        let texto = textInput.value;
        let resultCripto = btoa(texto)
        document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultCripto + '</textarea>'
    })
    //DESCRIPTOGRAFAR
    document.querySelector('.descriptografar').addEventListener('click', () => {
        let texto = textInput.value;
        let resultDescripto = atob(texto)

        document.getElementById('output').innerHTML = '<textarea readonly id="teste" id="input-texto">' + resultDescripto + '</textarea>'
    })
})