// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import { useDispatch } from "react-redux";
import {login} from "../../../store/session";
import "./LoginForm.css"


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit =(e) =>{
    e.preventDefault();
    const email  = 'demo@aa.io';
    const password ='password';
    return dispatch(login({email, password}))
  }
  return (
    <>

      <button className='loginbtn1' onClick={() => setShowModal(true)} >Log In</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />

        </Modal>
      )}

    </>
  );
}

export default LoginFormModal;
