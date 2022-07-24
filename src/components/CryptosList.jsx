import { SiBinance, SiPinboard } from 'react-icons/si'
import { BsPinAngleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CryptosList = ({ cryptos, search }) => {

    return (
        <div className="coins-container">

            {cryptos.filter(crypto => {
                if(search === '') {
                    return crypto
                } else if(crypto.symbol.toLowerCase().includes(search.toLowerCase())) {
                    return crypto
                }
            }).map(crypto => {

                if (crypto.count) {

       const priceChange = +crypto.priceChange;
       const priceChangeValue = priceChange.toPrecision();

       const priceChangePercent = +crypto.priceChangePercent;    
       const priceChangePercentage = priceChangePercent.toFixed(2);              
       const volume = +crypto.volume;
       const volumeValue = +(volume.toFixed(2));

       const numberFormatter = Intl.NumberFormat('en-US');
       const volumeValueFormatted = numberFormatter.format(volumeValue);
       
       return (
        <div className="coin-details">

            <div className="col-1">
                <div className="up">
                    <div className="symbol">
                        <p style={{fontSize:'18px', color:'#DCD5C2'}}>
                        { crypto.symbol }
                        </p>
                    </div>
                    <div style={{fontSize:'14px'}}  className="binance">
                        <div className="logo"><SiBinance /></div>
                        <p>BINANCE</p>
                    </div>
                </div>

                <div className="down">
                    <div className="graph">
                        
                    </div>
                </div>
            </div>


            <div className="col-2">
                <div className="up">
                    <div className="price">
                        <p style={{fontSize:'18px', color:'#DCD5C2'}}>{  crypto.askPrice }</p>
                    </div>

                    <div style={{
                        color: priceChange < 0 ? 'red' : 'green', fontSize: '14px'
                    }}  className="price-change">

                        { priceChange > 0 ? (
                            <p>+{ priceChangeValue }</p>
                            ) : (
                            <p>{ priceChangeValue }</p>) 
                        }

                        { priceChange > 0 ? (
                            <p>{ `(+${priceChangePercentage}%)` }</p>
                            ) : (
                            <p>{ `(${priceChangePercentage}%)`}</p>
                            ) 
                        }
                    </div>
                </div>

                <div className="down">
                    <div className="volume">
                        <div style={{fontSize:'13px'}}>
                        Vol(24H): { volumeValueFormatted }
                        </div>
                    </div>
                </div>
            </div>

            <div className="icon">
                <BsPinAngleFill />
            </div>

    </div>

                    )
                }
            } 
            ) }
        </div>

    )
}

export default CryptosList;

