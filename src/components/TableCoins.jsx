import CoinRow from "./CoinRow";
const titles = ["Moneda", "Precio", "Cambio","Volumen (24H)"];

const TableCoins = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase()));

    return (
        <table>
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td className="titles" key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;