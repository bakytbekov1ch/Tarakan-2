import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";


function Login({ close }) {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if(user) {
          navigate("/admin")
        }
        close(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__content">
          <MdClear onClick={() => close(false)} className="login__icon" />
          <form>
            <div className="login__btn">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login__btn">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={login}>
              Submit
            </button>
            {error && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
