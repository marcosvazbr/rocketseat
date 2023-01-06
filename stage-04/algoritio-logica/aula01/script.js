// duas barras para comentário em linha ou 
/* barra asteristico para comentarios multi-linhas

*/
/* como resolver problemas na linguagem de programação?

Como melhorar minha lógica de programação?

  1 identifique o que já sabe e faça.
  2 quebre o grande problema em passos menores.


O que estou aprendendo de JavaScript
  1 executar funções
  2 Variáveis 
    2.1 É recomendavel usar o let no lugar do var
  3 Concatenação (usa o + para juntar o conteúdo da string)
  4 String = cadeia de caracteres (um texto)


Pergunte o nome do usuário e escreva a mensagem:
"Olá, [nome do usuário]"

*/

let nome = prompt("Qual o seu nome?")
let item = prompt("Qual item gostaria de lavar?")
alert("Olá, " + nome + ", você gostaria de lavar " + item + " correto?")
let resp = prompt("Sim ou Não")

if(resp == "sim") {
  alert("Sua " + item + " será lavada")
} else {
  alert("Tente novamente.")
}

