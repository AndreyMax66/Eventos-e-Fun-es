// FUNÇÕES


// ALERT("")
// PROMPT()
// CONSOLE.CLEAR()
// CONSOLE.LOG()
// CONFIRM()
// FOR()
// WHILE()
// IF()
// ELSE()



// SINTAXE FUNÇÕES

// FUNÇÃO SIMPLES 

// function(){
// // o que será feito
// }




 //FUNÇÃO SIMPLES

function saudacao(){
    alert("Bem vindo ao meu site.")
}

//FUNÇÃO COM PARÂMETROS

function soma(){  
    let valor1 = Number (prompt("digite o primeiro valor"))
    let valor2 = Number (prompt("digite o segundo valor"))
    const resultado = valor1 + valor2
    console.log(resultado)
}



// Dobro
function dobro(){
    let numero = prompt("digite o numero ai")
    let valoremdobro = numero * 2;
    console.log(valoremdobro)
}  


let multiplicado = Number( prompt("digite um número"))
console.log(dobro(multiplicado))


//saudação personalizada
function saudacao2(){
let nome = prompt("Digite seu nome")
console.log(`oi, ${nome}, seja bem vindo`)


}
saudacao()

//DESCONTO
function desconto(){
    let valor = prompt("digite o valor que deseja calcular de desconto")
    let porcentagem = prompt("digite quanto de desconto voce deseja calcular (digite apenas o número, sem o simbolo de porcentagem.)")
    let descontado = valor - (valor * (porcentagem / 100))  
    console.log(`${descontado}`)

}

desconto()