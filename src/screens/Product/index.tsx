import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/student");
  };

  return (
    <div>
      <h1>Products page</h1>
      <button className="btn btn-primary" onClick={handleBackToHome}>
        Back to Student Page
      </button>
    </div>
  );
};

export default Product;
