import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="Nav">
        <link to="/">
            <div>Stock values in dolars</div>
        </link>
        <Link to="/Stocks">
            <div>Stocks Available</div>
        </Link>
    </div>
  )
}
