const tela = document.getElementById("tela")
const botaoApagar = document.getElementById("apagar")

var numero = document.querySelectorAll(".botao__numero")
var operador = document.querySelectorAll(".botao__operador")
const igual = document.getElementById("igual")

var numeroAtual = ""
var numeroAnterior = ""
var resultado = ""
var operadorSelecionado = ""

var calculoFeito = false

function apagar(){
    numeroAtual = ""
    numeroAnterior = ""
    resultado = ""
    operadorSelecionado =""
    tela.textContent=""
}

function atualizarTela(){
    tela.textContent = numeroAtual
}

numero.forEach(botao => {
    botao.addEventListener("click", ()=>{
        if(calculoFeito){
            apagar()
            calculoFeito = false
        }
        numeroAtual += botao.textContent
        atualizarTela()
    })
})

operador.forEach(botao =>{
    botao.addEventListener("click", ()=>{

        operadorSelecionado = botao.textContent

        if(operadorSelecionado === "x^2"){
            if (numeroAtual !== ""){
                numeroAnterior = numeroAtual
                numeroAtual = ""
                calcular()
                atualizarTela()
                calculoFeito = true
                return
            }
        }

        if(numeroAtual ==="") return

        if(numeroAnterior !== ""){
            calcular()
        }

        numeroAnterior = numeroAtual
        numeroAtual= ""
        
    })
})

function calcular(){

    const num1 = parseFloat(numeroAnterior)
    const num2 = parseFloat(numeroAtual)
        switch(operadorSelecionado){
            case "-":
                resultado = num1 - num2
                break

            case "+":
                resultado = num1 + num2
                break
            
            case "X":
                resultado = num1 * num2
                break

            case "/":
                resultado = num1 / num2
                break
            
            case "x^2":
                resultado = num1 ** 2   
                break
                
            case "x^y":
                resultado = num1 ** num2
                break

            case "%":
                resultado = num1 % num2
                break
            default:
                console.log("Operador invalida")
                return
        }
        numeroAtual = resultado.toString()
        atualizarTela()
}

igual.addEventListener("click", ()=>{
    calcular()
    calculoFeito = true
})