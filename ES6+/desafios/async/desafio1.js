// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

 async function umPorSegundo() {

  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');

}
umPorSegundo();

// B
import axios from 'axios';

async function getUserFromGithub(user) {
 const response = await axios.get(`https://api.github.com/users/${user}`)
  try { console.log(response.data);
  
  } catch (err) {
    console.log('Usuário não existe');
  }
}
  getUserFromGithub('diego3g');
  //getUserFromGithub('diego3g124123');

// C
  class Github {
    static async getRepositories(repo) {
    const response = await axios.get(`https://api.github.com/repos/${repo}`)
      try { 
        console.log(response.data);
      } catch (err) {
        console.log('Repositório não existe'); 
      }
    }
  }

    Github.getRepositories("geisweiller/mobile");

// D

const buscaUsuario = async usuario => {
  const response = await axios.get(`https://api.github.com/users/${usuario}`)
  try {
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }

 }
 buscaUsuario('geisweiller');

