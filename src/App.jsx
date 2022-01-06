import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import Cripto from './cripto.png';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <img src={Cripto} alt="Cripto" className='logo'/>
      <h1>Cripto Search</h1>
      <div className="search">
        <i className="fas fa-search-dollar"></i>
        <input type="text" placeholder="Buscar Criptomoneda" autoFocus="autofocus" onChange={e => setSearch(e.target.value)} />
      </div>
      <TableCoins coins={coins} search={search}/>
    </>
  );
}

export default App;