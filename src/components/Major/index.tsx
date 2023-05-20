import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Major = () => {
  const formik = useFormik<any>({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .max(15, "Must be 15 characters or less")
        .email("Email is not valid"),
    }),
    onSubmit: (values) => {
      console.log("Submitted ", values);
    },
  });

  return (
    <form
      className="border border-primary rounded-1 d-flex flex-column justify-content-between"
      style={{ width: "450px", height: "400px" }}
      onSubmit={formik.handleSubmit}
    >
      <div style={{ height: "2%" }} className="bg-primary"></div>
      <div
        style={{ height: "25%", backgroundColor: "#EEEEEE" }}
        className="d-flex flex-column align-items-center justify-content-center p-2"
      >
        <h2>Registration Form</h2>
      </div>
      <div className="d-flex flex-column gap-5 p-4 flex-grow-1">
        <div
          style={{ position: "relative" }}
          className="d-flex align-items-center justify-content-between"
        >
          <label>User name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            style={{ width: "60%" }}
            value={formik.values.name}
            onChange={formik.handleChange} //event handler
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{`${formik.errors.name}`}</p>
          ) : null}
        </div>
        <div
          style={{ position: "relative" }}
          className="d-flex align-items-center justify-content-between"
        >
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            style={{ width: "60%" }}
            value={formik.values.password}
            onChange={formik.handleChange} //event handler
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="d-flex align-items-center justify-content-between"
        >
          <label>Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            style={{ width: "60%" }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange} //event handler
          />
        </div>
      </div>
      <div
        style={{ height: "25%", backgroundColor: "#EEEEEE" }}
        className="d-flex align-items-center p-2 justify-content-center gap-2"
      >
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};
