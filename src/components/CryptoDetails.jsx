import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'


const CryptoDetails = () => {

    const { id } =  useParams();

    const { data: crypto, isPending, error } = useFetch('https://api.binance.com/api/v3/ticker/24hr?symbol=' + id);

    console.log(crypto)

    return (

        <div style={{color:'white', margin:'200px 0 0 100px'}}>
             { crypto && 
             <div>
            <h1>Crypto Details ID - {crypto.symbol}</h1>
            <p>Bid Price: { crypto.bidPrice }</p>
            <p>Bid Price: { crypto.bidPrice }</p>
            <p>Bid Price: { crypto.priceChange }</p>
            <p>Bid Price: { crypto.priceChange }</p>
            <p>Bid Price: { crypto.volume }</p> 
            <p>Bid Price: { crypto.volume }</p>
             </div> } 
             { isPending && <h1>Loading...</h1> } 
             { error && <h1>{ error }</h1> } 
            
     
           
           
           
        </div>
    )
}

export default CryptoDetails;