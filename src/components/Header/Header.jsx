import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";
const Header = () => {
  const [{ basket, user, showBackrop }, dispatch] = useStateValue();
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDisplay("none");
    }
  }, [showBackrop]);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const showBackropMenu = () => {
    dispatch({
      type: "SOW_BACKDROP",
      showBackrop: !showBackrop,
    });
  };
  return (
    <div className="header">
      <div onClick={() => showBackropMenu()} className="header__burger">
        <div className="header__row"></div>
        <div className="header__row"></div>
        <div className="header__row"></div>
      </div>
      <Link style={{ height: "100%" }} to="/">
        <img
          className="header__logo"
          src={`http://pngimg.com/uploads/amazon/amazon_PNG11.png`}
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div
        // style={{ display: `${showBackrop ? "flex" : display}` }}
        className="header__nav"
      >
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
