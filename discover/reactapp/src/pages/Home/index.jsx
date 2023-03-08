import './styles.css';

import {Card} from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

//http://127.0.0.1:5173/