//calculadora de partidas rankiadas – DESAFIO DIO.

let resulVitorias = calcVitorias(99,1);

function calcVitorias (vitorias,derrotas){
  let calculo = vitorias - derrotas
  return calculo
};

//mensagens

let mensagem = "O heroi tem um saldo de ";
let level = " ele está no nível ";

// Pontuação limite dos níveis 

const pontuacaoLimite =
  [
    [10, "Ferro!"], 
    [20, "Bronze!"],
    [50, "prata!"], 
    [80,"Ouro!"], 
    [90,"Diamante!" ], 
    [100, "Lendário!"],
    [101, "Imortal!"]
  ];

// loop 

for (let i = 0; i < pontuacaoLimite.length; i++){
  if (resulVitorias <= pontuacaoLimite[i][0]) {
    console.log(mensagem + resulVitorias + " vitórias!" + level + pontuacaoLimite[i][1])
 break
}
};

//comentários:

//Muito bom usar os conhecimentos que acabei de adquirir!
//A primeira solução fiz usando o IF, ELSE IF... melhorei ela ultilizando o "For", por meio disso encontrei o ".length", muito útil.
//Problema resolvido, que venha o próximo!