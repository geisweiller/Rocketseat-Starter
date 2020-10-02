//5.1 A partir do array defina uma variável x que recebe a primeira 
//posição do vetor e outra variável y que recebe todo restante dos dados.

const arr = [1, 2, 3, 4, 5, 6]

const [ x, ...y ]  = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.2 

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };
 
 const usuario2 = {...usuario, nome: 'Gabriel'};

 const usuario3 = {...usuario, cidade: 'Lontras'};
