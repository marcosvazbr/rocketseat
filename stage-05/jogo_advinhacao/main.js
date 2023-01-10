let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)

let xAttempts = 1

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  console.log(inputNumber.value) // para pegar o valor dentro do input, o conteúdo que foi digitado pelo usuário, usa-se .value

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas.`
  }
  xAttempts++
  console.log(xAttempts)

}


