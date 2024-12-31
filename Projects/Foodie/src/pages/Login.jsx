import "./css/Login.css";

function Login() {
  return (
    <div>
      <div className="wrapper w-screen h-screen flex justify-center items-center">
        <div className="box w-1/4 h-1/2 flex flex-col justify-start items-center bg-[#fde6e6] p-8 rounded-lg shadow-lg gap-5">
          <h1 className="form-heading font-gilroy-bold text-3xl">Login</h1>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            min="10"
            maxLength="10"
            className="number-input w-10/12 h-1/6 outline-none rounded-md p-3 text-lg"
          />
          <button
            type="submit"
            className="submit font-gilroy-medium text-sm w-10/12 h-1/6 bg-[#b80000] cursor-pointer text-white rounded-md border-none"
          >
            Login
          </button>
          <span className="term-condition font-gilroy-medium text-xs w-full text-start px-12">
            By clicking on Login, I accept the{" "}
            <span className="font-bold">
              Terms & Conditions & Privacy Policy
            </span>
          </span>
          <span className="create-account font-gilroy-medium text-sm">
            or{" "}
            <span className="select-none font-gilroy-bold cursor-pointer">
              create an account
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
