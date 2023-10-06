
let vezes = 0; //declara a variavel de forma global

function clicou(){

   vezes++; // incrementa o valor da variável
   console.log("Já foi clicado por ",vezes); // imprime no console

   //seleciona o elemento com o id 'saida'
   let saida = document.getElementById("saida");
   // altera o texto interno do elemento 
   saida.innerText = vezes;

}



let resultado = 0; //declara a variavel de forma global

function soma(){

   let numero = prompt("Entre com um número");
   resultado = resultado + parseInt( numero ) ; // incrementa o valor da variável
   console.log("O número digitado foi ",vezes); // imprime no console

   //seleciona o elemento com o id 'saida'
   let saida = document.getElementById("soma");
   // altera o texto interno do elemento 
   saida.innerText = resultado;

}

