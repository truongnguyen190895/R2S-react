import { LoginForm } from "../../components/Login";
import './style.css'

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <LoginForm title="Login" btnLabel="Sign In" />
    </div>
  );
};

export default LoginPage;
