//Variáveis
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let xAttempts = 1
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) 

//Funções
function handleTryClick(event) {

  event.preventDefault() // não faça o padrão (o padrão é enviar o formulário, nesta linha fala para não enviar)

  const inputNumber = document.querySelector("#inputNumber")

if((Number(inputNumber.value) >= 0) && (Number(inputNumber.value) <= 10)) {
  
  if(Number(inputNumber.value) == randomNumber) {
    reverseHide()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas.`
  }
  xAttempts++
  
  inputNumber.value = ""
  
} else {
  alert(`O numero ${Number(inputNumber.value)} não é válido, tente novamente `)
}
}


function handleResetClick() {
  reverseHide()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  inputNumber.value = ""
}

function reverseHide() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
