import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState({});

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    buscarUsuario();
  }, {});

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        <li>
          <h2>{usuario?.gender}</h2>
          <h2>{usuario?.email}</h2>
        </li>
      </ul>
    </>
  );
}
