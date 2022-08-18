import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
    const loginHandler = (e) => {
        e.preventDefault();
        // const [username, password] = Object.fromEntries(new FormData(e.target));
        console.log(Object.fromEntries(new FormData(e.target)));
        // console.log(password);
    }

    return (
        <section id="login-page" className="auth">
        <form id="login" className="login" onSubmit={loginHandler}>
          <div className="container">
            <div className="brand-logo" />
            <h1>Please enter your credentials</h1>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" placeholder="Password"/>
            <input type="submit" className="btn-submit-login" value="Login" />
            <p className="field">
              <span>
                If you don't have profile click <Link to="/register">here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    );
};

export default Login;