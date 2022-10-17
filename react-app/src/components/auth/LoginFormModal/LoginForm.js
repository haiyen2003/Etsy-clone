import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] =useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    history.push('/');

   setErrors([]);
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <div className='register_btn'>Register</div>
    <form onSubmit={onLogin}>
      <h2>Sign In</h2>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>Email address</label>
        <input
          name='email address'
          type='text'
          // placeholder='Email address'
          value={email}
          onChange={updateEmail}
          required={true}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          // placeholder='Password'
          value={password}
          onChange={updatePassword}
          require={true}
        />
        <button type='submit'>Login</button>
        <button type='submit' onClick={()=>{setCredential('demo@aa.io'); setPassword('password')}}>Demo User</button>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
