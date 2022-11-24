'use strict'
const bloco = document.querySelectorAll('.bloco');
const h2 = document.querySelectorAll('.h2');
//Quando click em h2 
  //tirar a classe activo de todos os bloques 
  // Adicionar a classe activo ao bloque com a posição do h2 

  h2.forEach((cadaH2, i ) => {
    //captura o click em cada h2 
    h2[i].addEventListener('click', () =>{

      //Pegar todos os blocos
      bloco.forEach((cadaBloco, i) => {
        //tirando a classe activo de todos os blocos 
        bloco[i].classList.remove('activo')
        
      }) 
      //adiciona a classe ativo ao bloco que tem a mesma posição do h2 
      bloco[i].classList.add('activo')
    })
  })