// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import SignUpForm from '../SignUpFormModal/SignUpForm';
import { useDispatch, useSelector} from "react-redux";
import {login} from "../../../store/session";
import { signUp } from '../../../store/session';
import "./LoginForm.css"


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state =>state.session.user);
  const [openLogin, setOpenLogin] = useState(true);
  const [openSignup, setOpenSignup] = useState(false);
  const handleSubmit =(e) =>{
    e.preventDefault();
    const email  = 'demo@aa.io';
    const password ='password';
    return dispatch(login({email, password}))
  }
  const handleModal =(e) =>{
    setShowModal(false)
    setOpenSignup(false)
    setOpenLogin(true)
  }
  return (
    <>

      {user ? <button>Log out</button>
      :<button className='homepage_loginbtn' onClick={() => setShowModal(true)} >Sign In</button>
      }


      {showModal &&
      (<Modal onClose={handleModal}>
        {openLogin && <LoginForm
          setOpenLogin={setOpenLogin}
          setShowModal={setShowModal}
          setOpenSignup={setOpenSignup}
          />}
        {/* <LoginForm /> */}
        {openSignup && <SignUpForm
          setOpenSignup={setOpenSignup}
          setShowModal={setShowModal}
          setOpenLogin={setOpenLogin}
        />}

        </Modal>
      )}

    </>
  );
}

export default LoginFormModal;
