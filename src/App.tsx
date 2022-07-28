import { useState } from 'react';
import style from './styles/App.module.scss'

export function App() {

  const [repositories, setRepositories] = useState([]);

  return (
    <div className={style.container}>
      <div>
        <div className={style.user}>
          <img src="https://github.com/Maikongab20.png" />
          <p>Maikon Gabriel</p>
          <p>Developer</p>
        </div>

        <div className={style.adress}>
          <p>github</p>
          <p>linkedin</p>
          <p>blog</p>
          <p>email</p>
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
      <div>
        <div className={style.menuPortifolio} >
          <p>Meus Projeros Recentes</p>
          <a href="https://github.com/Maikongab20">Veja Todos</a>
        </div>

        <div className="portifolio">

        </div>
        <div className="portifolio "></div>
      </div>
    </div>
  );
}
