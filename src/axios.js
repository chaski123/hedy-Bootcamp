/*mostrar nombre, símbolo, precio actual, MCR, MC e imagen.*/
import axios from "axios";
import { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";

const Axios = () => {
    const [getBitcoin, setGetBitcoin] = useState('')
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    const getData = async () => {
        try {
            const response = await axios.get(apiUrl);
            console.log(response.data);
            setGetBitcoin(response.data)
        }
        catch(error) {
            console.error("%c"+error, "color: purple");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            <h2 className='pattern'>Lista de monedas</h2>
                <ul className='userlist'>
                    {!getBitcoin ? 'Cargando' :
                    getBitcoin.map((data) => {
                        return (
                            <div className="Cryptos-Container" key={data.id}>
                                <br/>
                                <h4>Datos del: <b>{data.name}</b></h4>
                                <li><FaBitcoin/>Precio Actual: {data.current_price}</li> 
                                <li><FaBitcoin/>Simbolo: {data.symbol}</li> 
                                <li><FaBitcoin/>MCR: {data.market_cap_rank}</li> 
                                <li><FaBitcoin/>MC: {data.market_cap}</li> 
                                <img className="App-logo"src={data.image} alt="Moneda-img"></img>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        );
}
export default Axios