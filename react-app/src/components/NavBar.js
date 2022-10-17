
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './auth/LoginFormModal';

import "./NavBar.css"

const NavBar = () => {
  return (
    <nav id="header">
      <div id="header__left">

          <NavLink to='/' exact={true} activeClassName='active'>
          <img
            id = "header__icon"
            src = "https://bushelandpecks.com/wp-content/uploads/2017/03/etsy-logo.png"
            alt='logo'
            />
          </NavLink>
      </div>
      <div id= "search_bar_container">
          <div id="search_bar">

          </div>
        </div>
        <div>
          {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          <LoginFormModal />
        </div>
        <NavLink to='/cart' exact>
          <img
            id = "shopping_cart_icon"
            src = "https://www.nicepng.com/png/detail/253-2534370_png-file-shopping-cart-line-icon.png"
            alt = "logo"
          />

        </NavLink>
        {/* <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign In
          </NavLink>
        </div> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <div>
          <LogoutButton />
        </div> */}

    </nav>
  );
}

export default NavBar;
