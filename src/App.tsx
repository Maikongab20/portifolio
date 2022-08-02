import style from './styles/App.module.scss'

interface Repo {
  name: string;
  descption: string;
}

export function App() {

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
      {/* lado direito */}
      <div className={style.direito}>
        <div className={style.menuPortifolio} >
          <p>Meus Projeros</p>
          <a href="https://github.com/Maikongab20">Veja Todos</a>
        </div>

        <div className={style.portifolio}>

          <div className={style.post}>
            <h2>my-onix</h2>
            <strong>Consulte os códigos de erro que aparecem no painel do veículo Onix.</strong>
            <p>java Script</p>
          </div>
          <div className={style.post2}>
            <h2>my-onix</h2>
            <strong>Consulte os códigos de erro que aparecem no painel do veículo Onix.</strong>
            <p>java Script</p>
          </div>
        </div>
      </div>
    </div>
  );
}
