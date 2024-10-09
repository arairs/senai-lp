const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=> {
e.preventDefault()

const numero = Number(frm.inNumero.value) //obtem o numero digitado no form
const raiz = Math.sqrt(numero) //calcula raiz quadrada do numero

if(Number.isInteger(raiz)){ // se valor da raiz for um número inteiro
    resp.innerText = `Raiz: ${raiz}` //mostra a raiz
} else {

    resp.innerText = `Não há raiz exata para ${numero}`
}

})