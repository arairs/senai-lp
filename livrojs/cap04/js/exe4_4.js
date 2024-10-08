const frm = document.querySelector("form");
const resp = document.querySelector ("h3");

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{

e.preventDefault() //evita o envio do formulario
const horaBrasil= Number(frm.inHoraBrasil.value); //obtém e converte o conteudo do campo inHoraBrasil
let horaFranca = horaBrasil + 5 ;// calcula o horário na França
if (horaFranca>24){ //se passar das 24 horas na Franca
    horaFranca = horaFranca -24 //subtrai 24

}

//exibe a resposta (altera o conteúdo do elemento h3 da página)
resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
})