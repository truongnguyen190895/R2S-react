import { Header } from "./components/Header";
import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <h1>App</h1>
      </div>
    </div>
  );
}

export default App;

/**
 * where to call API (API call is asynchronous code )
 * 1. inside component
 * 2. tools: redux-saga, redux-toolkit, react-query
 * Component: pure function
 * Side effect
 */
