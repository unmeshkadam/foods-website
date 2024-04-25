import React from "react";
import "../../assets/styles/header.css";
import logo1 from "../../assets/img/logo_foods.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div className="header-container">
      <div className="header">
        <img src={logo1} className="logo-img" width="150px" />
        <div className={menuOpen ? "navlinks-div-active" : "navlinks-div"}>
          <a href="#whats-on-foods">WHAT'S ON FOODS</a>
          <a href="#menu">TODAY'S MENU</a>
          <a href="#happiness-cards">HAPPINESS CARDS</a>
          <a href="#smiles">SMILES</a>
          <button className="delivery-btn">Delivery/Takeaway</button>
        </div>
        <div className="icons-div">
          <Stack spacing={3} direction="row">
            <Badge badgeContent={3} color="primary">
              <NotificationsNoneIcon className="icons" fontSize="small" />
            </Badge>
            <ShoppingCartIcon className="icons" fontSize="small" />
          </Stack>
          <div className="expand-icon">
            {menuOpen ? (
              <CloseIcon fontSize="small" onClick={handleMenuIconClick} />
            ) : (
              <MenuIcon fontSize="small" onClick={handleMenuIconClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
