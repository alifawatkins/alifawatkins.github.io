
import { useParams } from 'react-router-dom';
import stocks from './data';

function Stock(props){
    const params = useParams();
    const symbol = params.symbol;
    const stockData = stocks.filter(s => s.symbol===symbol);
    return(
        <div>
            <h1>{stockData[0].name} ({stockData[0].symbol})</h1>
            <p><b>Stock Price:</b>{stockData[0].lastPrice}</p>
            <p><b>Percent Change:</b>{stockData[0].change}</p>
            <p><b>High Price:</b>{stockData[0].high}</p>
            <p><b>Low Price:</b>{stockData[0].low}</p>
            <p><b>Price at Open:</b>{stockData[0].open}</p>
        </div>
    );  
}

export default Stock;