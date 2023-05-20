import React, { useState } from "react";
// import FontAwesomeIcon from ''
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

interface Props {
  title: string; // required
  btnLabel: string; // optional
}

const admin = {
  userName: "admin",
  password: "123456",
};

export const LoginForm = ({ title, btnLabel }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    const { userName, password: adminPassword } = admin;
    if (name === userName && password === adminPassword) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setTimeout(() => {
        setIsError(true);
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="login-form-container border border-primary">
          <div className="login-form-header bg-primary">
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
            <h2>{title}</h2>
          </div>
          <div className="login-form-control">
            <div className="d-flex flex-column justify-content-center">
              <div className="row mb-3 d-flex align-items-center">
                <label htmlFor="txtUsername" className="col-3 col-form-label">
                  User name
                </label>
                <div className="col-9 p-0">
                  <input
                    type="text"
                    className="form-control"
                    name="txtUsername"
                    id="txtUsername"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3 d-flex align-items-center">
                <label
                  htmlFor="txtPassword"
                  className="col-md-3 col-form-label"
                >
                  Password
                </label>
                <div className="col-md-9 p-0">
                  <input
                    type="password"
                    className="form-control"
                    name="txtPassword"
                    id="txtPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center footer">
              {isError ? (
                <small className="error">
                  Username or password is incorrect
                </small>
              ) : null}

              <button
                type="button"
                className="btn btn-primary col-3 offset-3"
                onClick={handleSubmit}
              >
                {btnLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
