import style from './styles/App.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import img
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import whatsapp from './icons/whatsapp.svg';
import google from './icons/google.svg';


interface Repo {
  full_name: string;
  descption: string;
  language: string;
}

export function App() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/Maikongab20/repos')
      .then(response => {
        setRepos(response.data);
      });
  }, []);

  console.log(repos);

  return (
    <div className={style.container}>
      <div>
        <div className={style.user}>
          <img src="https://github.com/Maikongab20.png" />
          <h2>Maikon Gabriel</h2>
          <p>Developer</p>
        </div>

        <div className={style.sobre}>
          <h2>Sobre min</h2>
          <p> Sou um programador empenhado em alcançar o próximo nível,
            em aprender novas tecnologias adquirindo novos conhecimentos,
            e superar obstáculos junto da equipe.
          </p>
        </div>

        <div className={style.adress}>
          <div>
            <img src={github} />
            <a href="https://github.com/Maikongab20" >Mikon Gabriel</a>
          </div>
          <div>
            <img src={google} />
            <p>maikon111gabriel@gmail.com</p>
          </div>
          <div>
            <img src={linkedin} />
            <a href="https://www.linkedin.com/in/maikon-gabriel-silva-49b70b193/" >Maikon Gabriel</a>
          </div>
          <div>
            <img src={whatsapp} />
            <a href='https://api.whatsapp.com/send?phone=5514996824171'>(014)996824171</a>
          </div>
        </div>
        <div className={style.tecnologia}>
          <strong>Tecnologia</strong>
          <p>typescrypt</p>
          <p>nodejs</p>
          <p>git</p>
          <p>gitHub</p>
          <p>html</p>
          <p>css</p>
          <p>reactjs</p>
          <p>react native</p>
        </div>
      </div>
      {/* lado direito */}
      <div className={style.direito}>
        <div className={style.menuPortifolio} >
          <p>Meus Projeros</p>
        </div>

        <div className={style.portifolio}>
          {
            repos.map(repo => {
              return (
                <div className={style.post} key={repo.full_name}>
                  <h2>{repo.full_name}</h2>
                  <strong>{repo.descption}</strong>
                  <p>{repo.language}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  );
}
