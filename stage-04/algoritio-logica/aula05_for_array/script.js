/*

* Estrutura de dados

Organização e gerenciamento dos dados
Melhor eficiência do código
[] Estruturas de repetição

laço de repetição
for
[] Vetores (Arrays)
[] Tipo de dado estruturado
[] incremental (++): o valor + 1
[] Tipo de dado: undefined

//////////////////////////////

Capture 10 items para compor a lista de um supermercado.

Após capturar os 10 itens, imprima-os, separando por vírgula.

*/

// meu código

/*
list = [
  prompt("Item 1"),
  prompt("Item 2"),
  prompt("Item 3"),
  prompt("Item 4"),
  prompt("Item 5"),
  prompt("Item 6"),
  prompt("Item 7"),
  prompt("Item 8"),
  prompt("Item 9"),
  prompt("Item 10"),
]

alert(list)
*/

// Professor

let list = []; // com uso da variável let(const), tem que criar a variável fora do scopo ou bloco de código. Ela feita fora irá funcionar dentro, mas feita dentro, não irá funcionar fora.

for(let item = 0; item < 10; item++) {
  
  list[item] = prompt("Digite o item " + (item + 1))
  
}

alert(list)
alert(list[20]) // quando não tem dado(foi só até o 10) irá aparecer undefined

