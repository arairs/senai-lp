const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

addEventListener(submit (e)=> {
e.preventDefault;

const numero = Number(frm.inNumero.value); //obtem o numero digitado no form
const raiz = numero * numero; //calcula raiz quadrada do numero Math.sqrt(numero)

if(Number.isInteger(raiz)){
    resp.innerText = `Raiz: ${raiz}` //mostra a raiz
} else {

    resp.innerText = `Não há raiz exata para ${numero}`
}

})