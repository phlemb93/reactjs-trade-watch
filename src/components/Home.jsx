import { CryptosList } from '../components';
import useFetch from '../useFetch';
import { ImSpinner6 } from 'react-icons/im';

const Home = ({ search }) => {

    const { data: cryptos, isPending, error } = useFetch('https://api.binance.com/api/v3/ticker/24hr');

    return (
        <div className="home">
            { cryptos && <div><CryptosList search={search} cryptos={cryptos} /></div> }
            { isPending && <div className="loading-data" style={{fontSize:"16px"}}>Loading <ImSpinner6 className="spinner" /></div> }
            { error && <div>{ error }</div> }
        </div>
    )
}

export default Home;