import { useNavigate } from "react-router-dom";

import { Actions } from "../../store/actions";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";

const Product = () => {
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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
