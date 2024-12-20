import "./css/Login.css";

function Login() {
  return (
    <div>
      <div className="wrapper">
        <div className="box">
          <h1 className="form-heading">Login</h1>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            min="10"
            maxLength="10"
            className="number-input"
          />
          <button type="submit" className="submit">
            Login
          </button>
          <span className="term-condition">
            By clicking on Login, I accept the{" "}
            <span>Terms & Conditions & Privacy Policy</span>
          </span>
          <span className="create-account">
            or <span>create an account</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
