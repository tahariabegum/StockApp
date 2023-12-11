import {stocks} from  '../data'
import { useParams } from 'react-router-dom'

export default function Stock () {

   let { symbol } = useParams() 

   const filteredStocks = stocks.filter(stock =>  stock.symbol == symbol)


   return (

    <div>
        {filteredStocks.map((item)=>{
            return(
                <>
                <h2>{`${item.name} (${item.symbol})`}</h2>
                <p>Last Price: {item.lastPrice}</p>
                <p>Change: {item.change}</p>
                <p>High: {item.high}</p>
                <p>Low: {item.low}</p>
                <p>Open: {item.open}</p>
                </>
            )
        })}
    </div>
  )
}
