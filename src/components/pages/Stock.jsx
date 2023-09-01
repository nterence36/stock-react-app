
import { useParams } from "react-router-dom";
import stocks from "../../data";
export default function Stock(props) {
  const params = useParams();
  const symbol = params.symbol;

  const stock = stocks.filter((stockEl) => stockEl.symbol === symbol)[0]
  return (
    <div>
      <h2>Name: {stock.name}</h2>
      <h2>Nrice: {stock.lastPrice}</h2>
    </div>
  )

}