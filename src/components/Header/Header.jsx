import React from "react";

import { Link } from "react-router-dom";
import { NavBarContainer, LogoRouter } from "./HeaderStyles";
const Header = () => {
  return (
    <NavBarContainer id="Header">
      <LogoRouter>
        <Link to="/">
          <img src="./img/logo.png" height={"120px"}></img>
        </Link>
      </LogoRouter>
    </NavBarContainer>
  );
};

export default Header;
