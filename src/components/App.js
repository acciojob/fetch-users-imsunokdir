import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import Table from "./Table";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleClick = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      setData(response.data.data);
    } catch (err) {
      console.log("opps..!!. There was an error : ", err);
    }
  };

  return (
    <div id="main">
      <div className="header">
        <h1>Blue whales</h1>
        <button className="btn" onClick={handleClick}>
          Get User List
        </button>
      </div>
      <Table data={userData} />
    </div>
  );
};

export default App;
