function calcular(){

    const nome = document.getElementById("inNome").value;
    const feminino = document.getElementById("inFeminino").checked;
    const altura = document.getElementById("inAltura").value;

    let peso = feminino ? Math.pow(altura,2) * 21 : Math.pow(altura,2) *22;

   /* if (feminino){

        peso = 21 * Math.pow(altura, 2)
        } else {
        peso = 22 * Math.pow(altura, 2)
        }*/

        document.querySelector("h3").innerText= `Peso ideal ${peso.toFixed(2)}`
    return false; //vai impedir o refresh da pagina equivalente ao e.preventDefault()

} 

function limpar(){
    document.querySelector("h3").innerText = `${nome}: Peso ideal ${peso.toFixed(2)}`;
}

