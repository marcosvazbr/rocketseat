/*

Nessa aula veremos sobre:

[] Como controlar o fluxo da aplicação
[] Estrutura de repetição while
[] Gerar número aleatório utilizando Math()

Pacote com funcionalidades matemáticas
Math.random()
Math.round() - Math.ceil() - Math.floor()
[] Tipo de dado: NaN
não é um número
[] Tipo de erro: SyntaxError
erro de sintaxe; erro de escrita de código
[] console
Pacote com funcionalidades para o console do devtools (browser)
[] template literals ou template strings
interpolação de dados

///////////////////////////////////////

Jogo da advinhação

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas

*/
// Math. (há inumeras funções prontas dentro do Math.)
//Math.round = irá arredondar o número para um inteiro
//Math.random = irá gerar um número aleatório entre 0 e 1 (sem incluir 0 e 1)


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

const match = Number(result) == randomNumber

console.log(result, randomNumber, match)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt ("Erro, tente novamente:")
  xAttempts++
}

//alert("Parabéns! Você advinhou o número em " + xAttempt + " tentativas")

// pode fazer com acento grave `` neste caso tem que interpolar

if (xAttempts == 1) {
  alert(`Parabéns! Você adminou o número em ${xAttempts} tentativa.`)
} else {
  alert(`Parabéns! Você adminou o número em ${xAttempts} tentativas.`)
}


// usa ${} para acrescentar algo que não seja texto.