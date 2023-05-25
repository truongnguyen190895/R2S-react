import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./screens/Product";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import Major from "./screens/Major";
import ProductDetail from "./screens/Product/ProductDetail";
import LoginPage from "./screens/Login";
import NotFound from "./screens/NotFound";
import store from "./store";
import { Provider } from "react-redux";

//nested route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Not found</p>,
    children: [
      {
        path: "/major",
        element: <Major />,
      },
      {
        path: "/student",
        element: <h1>Student Page</h1>,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
