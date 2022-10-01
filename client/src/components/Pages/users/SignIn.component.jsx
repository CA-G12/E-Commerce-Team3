import './SignIn.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const loginValidationSchema = yup
  .object()
  .shape({
    password: yup
      .string()
      .min(8, 'password must be more than 8 characters')
      .required('password field is required'),
    email: yup
      .string()
      .email('this field must be an email')
      .required('email field is required')
      .trim(),
  })
  .required();

function SignIn() {
  const [title, setPageName, user, setUser, isLogged, setIsLogged] =
    useOutletContext();
  setPageName('Log In');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async (e) => {
    e.preventDefault();
    try {
      await loginValidationSchema.validate({
        email,
        password,
      });
      const res = await axios.post('/users/login', {
        email,
        password,
      });

      if (res.data.status === 200) {
        setIsLogged(true);
        toast.success(`Hi ${res.data.user.name}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/');
      } else {
        toast.error(res.data.status, {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      // console.log(error);
      let errorMessage = '';
      if (error.errors instanceof Array) {
        errorMessage = error.errors[0];
      } else {
        errorMessage = error.response.data.msg;
      }
      toast.error(errorMessage, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="sign-in-container">
      <div className="screen">
        <div className="screencontent">
          <form className="login">
            <div className="loginfield">
              <i className=" loginicon fas  fa-envelope"></i>
              <input
                type="email"
                className="logininput"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginfield">
              <i className="loginicon fas fa-lock"></i>
              <input
                type="password"
                className="logininput"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="button loginsubmit" id="login">
              <span className="buttontext" onClick={signin}>
                Log In Now
              </span>
              <i className="buttonicon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screenbackground">
          <span className="screenbackgroundshape screenbackgroundshape4"></span>
          <span className="screenbackgroundshape screenbackgroundshape3"></span>
          <span className="screenbackgroundshape screenbackgroundshape2"></span>
          <span className="screenbackgroundshape screenbackgroundshape1"></span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
