import axios from "axios";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiCall = async () => {
    try {
      const responseCall = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(responseCall);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div>
        <h1>hello</h1>
      </div>
      <Navbar />
    </>
  );
}

export default App;
