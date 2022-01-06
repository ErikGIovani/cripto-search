const CoinRow = (props) => {
    return (
        <tr>
            <td>
                <img src={props.coin.image} alt={props.coin.name}/>
                <span>{props.coin.name}</span>
                <span className='coin-symbol'>{props.coin.symbol}</span>
            </td>
            <td>${props.coin.current_price} MXN</td>
            <td className={props.coin.price_change_percentage_24h > 0 ? "good" : "bad"}>
                {props.coin.price_change_percentage_24h} %
            </td>
            <td>${props.coin.total_volume} MXN</td>
        </tr>
    )
}

export default CoinRow;