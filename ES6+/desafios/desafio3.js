// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Arthur', idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Arthur";
const idade = 23;

const mostraUsuario = (nome = "Arthur", idade = 18) => ({
  nome,
  idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
