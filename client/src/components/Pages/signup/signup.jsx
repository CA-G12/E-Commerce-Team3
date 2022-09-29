import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import signSchema from '../../../utils/fetch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './signup.css';
const signSh = yup.object().shape({
  username: yup.string().required('The name field is required'),
  email: yup
    .string()
    .email('this field must be an email')
    .required('The email field is required')
    .trim(),
  password: yup
    .string()
    .min(8, 'must be more than 8 characters')
    .required('The password field is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The field must match')
    .required('The confirm password field is required'),
  avatar: yup.string().required('The avatar  field is required'),
});

function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const register = async (e) => {
    try {
      e.preventDefault();
      await signSchema.validate({
        username,
        email,
        password,
        confirmPassword,
        avatar,
      });

      let res = await axios.post('/users/signup', {
        username,
        email,
        password,
        avatar,
      });
      toast(`hello ${res.data.username}`);
      navigate('/');
    } catch (error) {
      let errorMessage = '';
      if (error.errors instanceof Array) {
        errorMessage = error.errors[0];
      } else if (error.message) {
        errorMessage = error.message;
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
    return (
      <div className="container-signup">
        <div className="screen">
          <div className="screen__content">
            <form className="signup">
              <div className="signup__field">
                <i className="signup__icon fas fa-user"></i>
                <input
                  type="text"
                  className="signup__input"
                  placeholder=" name"
                  id="username"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="signup__field">
                <i className=" signup__icon fas  fa-envelope"></i>
                <input
                  type="email"
                  className="signup__input"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup__field">
                <i className="signup__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="signup__input"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signup__field">
                <i className="signup__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="signup__input"
                  placeholder=" confirm Password"
                  id="confirmpassword"
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              <div className="signup__field">
                <i className=" signup__icon fas fa-image"></i>
                <input
                  type="text"
                  className="signup__input"
                  placeholder=" image"
                  id="logo"
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>

              <span
                onClick={register}
                className="button signup__submit"
                id="signup"
              >
                sign up Now
              </span>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    );
  };
}
export default Signup;
