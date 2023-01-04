/* FALSY
      Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

      false
      0
      -0
      ""
      null
      underfined
      NaN
*/

console.log( 0 ? 'verdadeiro' : 'falso')
// é obrigatório que o primeiro valor seja um booleano, se não estiver comparando com nada e for um dos apresentados anteriormentes o JS irá considerar falso.


/* TRUTHY
      Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

      true
      {}
      []
      1
      3.23
      "0"
      "false"
      -1
      Infinity
      -Infinity
  */

    console.log([] ? "verdadeira" : 'false')










       