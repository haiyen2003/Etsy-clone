import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import "../NavBar.css"


const LogoutButton = () => {
  const history= useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
  };

  return <button className="menu-item-button" onClick={onLogout}><i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i> &nbsp;Logout</button>;
};

export default LogoutButton;
