import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../store/actions";

const Product = () => {
  const navigate = useNavigate();
  const authData = useSelector((state) => (state as any).auth);
  const dispatch = useDispatch();

  console.log("authData ", authData);

  const handleBackToHome = () => {
    navigate("/student");
  };

  const handleLogin = () => {
    dispatch({ type: Actions.LOGIN_USER });
  };

  const handleUpdateName = () => {
    dispatch({ type: Actions.UPDATE_USERNAME, payload: "Someone" });
  };

  return (
    <div>
      <h1>Products page</h1>
      <h2>Welcome {authData?.currentUser?.name} to see this product</h2>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "10px" }}
        onClick={handleUpdateName}
      >
        Update name
      </button>
    </div>
  );
};

export default Product;
