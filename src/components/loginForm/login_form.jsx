//login
import React from "react";
import "./login_form.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login_Form = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have a account?{" "}
            <a href="www.pc">Pida acceso en Informatica</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login_Form;
