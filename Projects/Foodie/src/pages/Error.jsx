import "./css/Error.css";
import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  const { status, statusText, data } = err;

  return (
    <div className="error-container">
      <h1 className="error">
        {status} {statusText}
      </h1>
      <h1 className="error-msg">{data}</h1>
      <h1 className="suggestion">
        Suggestion : <span>Please Try Correct URL 😇</span>
      </h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt=" cute dog"
      />
    </div>
  );
}
export default Error;
