const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//entrada
frm.addEventListener("submit", (e)=>{
const preco = frm.inPreco.value;
const modelo = frm.inModelo.value;

//processamento
const entrada = preco/2;
const parcela = (preco - entrada)/12;


resp1.innerText = `Promoção do veículo: ${modelo}`;
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)} + 12x de ${parcela.toFixed(2)}`;
e.preventDefault();

})