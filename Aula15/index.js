//pedindo um número para o usuário - entrada
var escolheu = prompt("Digite um número de 0 a 9.");

var sorteado = Math.floor(Math.random()*10);


if (escolheu==sorteado) {
   alert("Você acertou! O número sorteado foi "+sorteado);    
} else {
    alert("Não foi dessa vez! O número sorteado foi "+sorteado+
    " e você digitou "+escolheu);        
}