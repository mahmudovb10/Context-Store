import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Navbar() {
  const { totalAmount, totalPrice } = useContext(GlobalContext);
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">Context Store</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="header__card">
            <span className="header__card__indicator">{totalAmount}</span>
            <FaShoppingCart />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
