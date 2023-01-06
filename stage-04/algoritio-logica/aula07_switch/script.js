/*

Nessa aula aprenderemos sobre:

Quais os dados de entrada que terei? (inputs)
Quais as variáveis?
Qual o caminho ideal? (fluxo ideal)
Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
Qual é a saída, ou quais os dados de saída, esperada? (outputs)


Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays
[] condicional if/else
[] template literals (strings)

///////////////////////////////////////////

Faça um program aque tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opção desejada.

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do pragama

---
O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o unuário digite1, ele podera cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  se não houver nenhum item cadastrado, mostrar a mensage:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

// Minha tentativa

/*

let optionOn

let list = []
let itens = 0

while (optionOn != 3) {

  optionOn = prompt("Olá usuário! Digite o número da opção desejada.\n \n 1. Cadastrar um item na lista.\n 2. Mostrar itens cadastrados.\n 3. Sair do pragama")

  optionOn = Number(optionOn)

  switch (optionOn) {
    case 1:
     list[itens] = prompt("Digete o item.")
     itens++
     break
    case 2:
     if (itens == 0) {
       alert("Não existem itens cadastrados")
      } else {
       alert(list)
      }
      break
    case 3:
      alert("O prgrama será fechado.")
      break
  } 
} 

*/

// versão professor 01

/*

let option
let items = []

while (option != 3) {

  option = Number(prompt(`
  Olá usuário! Digite a opção desejada.

  1. Cadastrar um item na lista.
  2. Mostrar itens cadastrados.
  3. Sair do pragama.`)) // usando o `` você pode quebrar linha, usando "" '' não pode, dará erro
  // pode fazer direto, não precisa transformar de forma separada.



  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) // função .push cria cada item em um espaço vazio.
  } 
  else if (option == 2) {
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  }
}

*/

//Verção professor 02

let option
let items = []

while (option != 3) {

  option = Number(prompt(`
  Olá usuário! Digite a opção desejada.

  1. Cadastrar um item na lista.
  2. Mostrar itens cadastrados.
  3. Sair do pragama.`))


  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item)
      break;
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break;
    case 3:
      //caminhão padrão quando não é nenhum outro caso.
      alert("Tchau")
      break
    default:
      alert("Opção inválida, tente novamente.")
  }
}