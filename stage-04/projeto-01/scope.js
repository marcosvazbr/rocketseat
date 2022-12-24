/*

Scope

  escopo determina a visibilidade de alguma variável no JS.

  Block Statement (declaração de bloco) 

   
    {  //vamos iniciar um bloco

      //..aqui dentro é um bloco e posso colocar qualquer código

    } // aqui fechamos o bloco

    // O bloco, também criará um novo escopo. Chamamos de `block-scoped`


    */

    {
      let x = 0
      console.log(x)
    }


    /* 

    Var

      é global e, também local (pode funcionar fora de um scope).

      com o VAR o JS analisa se há uma variável após a função.
    Exemplo: */

    console.log('> existe x antes do bloco? ', x)
    {
    var x = 0
    }
    //mesmo a variável x sendo criada apos a console.log, o JS irá retornar que ela existe, mas que é undefined.



    /*

    let 
      usando a variável let

      Const e let são locais e só funcionam no escopo onde foi criada

      */

    console.log('> existe y antes do bloco? ', y)

    {
      let y = 0
    }

    //dará um erro, o let não levará a variável para antes da função.

    //Estando em fora do mesmo escopo, ele nem será localizado.

    //estando no mesmo escopo, dará erro e falará que não consegue acessar por está após

    {
      console.log('> existe y antes do bloco? ', y)
      let y = 0
    }


    // se estiver no mesmo scope e declarado antes, ai sim irá funcionar.

    {
      let y = 0
      console.log('> existe y antes do bloco? ', y)
    }

    // estando fora do scope, mas antes, dará erro também, falará que y não foi definido.

    {
      let y = 0
      console.log('> existe y antes do bloco? ', y)
    }
    
    console.log('> existe y antes do bloco? ', y)

    // o let a variável de um scope anterior.

    let y = 1

    {
      y = 0
      console.log(y)
    }

    console-log(y)

    //neste caso irá atualizar a variável criada fora do scope e todos serão a 0