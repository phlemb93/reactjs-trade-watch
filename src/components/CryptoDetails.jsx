import { useParams } from 'react-router-dom'


const CryptoDetails = () => {

    const { symbol } =  useParams();
    console.log(symbol)

    return (

        <div>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
            <h1>Crypto Details ID = { symbol }</h1>
        </div>
    )
}

export default CryptoDetails;