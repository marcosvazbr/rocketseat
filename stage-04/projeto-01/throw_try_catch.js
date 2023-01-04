//throw (disparar, lançar)
// try(tentar) ... catch (pegar, capturar)

// tentar executar um bloco de código e se der algum erro ele irá disparar o erro

function sayMyName(name = '') {
  if (name === ''){
    throw new Error("Nome é necessário")
  }
// throw irá parar a execução da função, não irpa mostar 'depois do erro'.
  console.log('depois do erro')
}

// se rodar a funão fora do try e catch irá apresentar um erro e não rodará a função. 
// dentro dele irá retornar a mensagem de erro 'Nome é necessário'
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

// usando o try catch o erro será capturado e a função continuará funcionando, não irá travar.












       