
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Stocks from "./Stocks";

export default function Stock(props) {
     const params = useParams();
    const symbol = params.symbol;
    const [stock, setStock] = useState("null");
    const url = `http://localhost:5173/stocks/${symbol}`;
    const getStock = async () => {
        try {  const answer = await fetch(url);
            const stockData = await answer.json();
            setStock(stockData);
        } catch(e){
            console.error(e)
        }

    } 
    useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        return (
          <div>
            <h2>{Stockies.name}</h2>
          </div>
        );
      };
      
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    
    return stock && stock.name ? loaded() : loading();
    };
       

