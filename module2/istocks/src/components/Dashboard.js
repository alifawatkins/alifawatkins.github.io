import stocks from "./data";
import { Link } from "react-router-dom";
import "../App.css"

function Dashboard(){
    return(
        <div>
            <h1>MOst ACtive STocks</h1>
            <table>
                <thead>
                    <tr>
                    <th>COmpany NAme</th>
                    <th>PRice</th>
                    <th>CHange</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stockPoints)=>{
                        const {name, symbol, lastPrice, change, open} = stockPoints;
                        return (
                            
                            <tr>
                                <td><Link key={symbol} to={`/stock/${symbol}`}>{name}({symbol})</Link> </td>
                                <td>{lastPrice}</td>
                                <td className={change>0 ? "green":"red"}>{(lastPrice-open).toFixed(2)} ({change > 0 ? "+" : "" }{change.toFixed(2)}%)</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );  
}

export default Dashboard;