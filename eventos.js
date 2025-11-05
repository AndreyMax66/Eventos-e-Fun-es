// Evento Onclick 

//document
function mudartexto(){
    document.getElementById("texto").innerText = "Max"

}

function entrar(){
        let caixa = document.getElementById("caixa")

        caixa.style.backgroundColor= "Red"
        caixa.innerText = "Max"
}

function sair(){
    let caixa = document.getElementById("caixa")

        caixa.style.backgroundColor= "rgb(84, 209, 203)"
        caixa.innerText = "Andrey"
}




function mudarcor(){
    let select = document.getElementById("cor").value
    document.body.style.backgroundColor = select


}