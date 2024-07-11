import React, { useEffect, useState } from "react";

import "./AdminNumber.scss";
import axios from "axios";

const mocApi = "https://668f6b7480b313ba09180a62.mockapi.io/tarakanPhone";

function AdminNumber() {
  const [open, setOpen] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(mocApi);

      setOpen(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteClick(id) {
    try {
      await axios.delete(`${mocApi}/${id}`);

      setOpen((remove) => remove.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="AdminNumber">
      <div className="container">
        <div className="AdminNumber__content">
          {open.map((item, index) => (
            <div key={index} className="adminnumber__block">
              <h1>{item.name}</h1>
              <h2>{item.phone}</h2>
              <button onClick={() => deleteClick(item.id)}>remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminNumber;
