import { Link } from "react-router-dom";
import stocks from "../../data";
export default function Stocks(props) {
  return (
    <div className="Stock">
      {stocks.map((oneStock) => {
        const { name, symbol } = oneStock;

        return (
          <Link to={`/stock/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
