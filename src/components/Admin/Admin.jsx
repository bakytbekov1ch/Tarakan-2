import React, { useEffect, useState } from "react";
import "./Admin.scss";
import AdminNumber from "../AdminNumber/AdminNumber";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/tarakan";

function Admin() {
  const [value, setValue] = useState("admin");
  const [isPost, setIsPost] = useState([]);
  const [authUser, setAuthUser] = useState(null);

  async function handlerClick() {
    try {
      const res = await axios.get(API);
      setIsPost(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${API}/${id}`);
      setIsPost((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  function handlerPopup(str) {
    setValue(str);
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => listen();
  }, []);

  useEffect(() => {
    handlerClick();
  }, []);

  return (
    <div>
      {authUser ? (
        <div className="admin">
          <div className="container">
            <div className="admin__nav">
              <ul>
                <li onClick={() => handlerPopup("admin")}>Reviews-admin</li>
                <li onClick={() => handlerPopup("number")}>Phone-number</li>
              </ul>
            </div>
            <hr />
            {value === "admin" ? (
              <div className="admin__content">
                {isPost.map((item) => (
                  <div className="admin__block" key={item.id}>
                    <h6>08.07.2024</h6>
                    <h2>{item.body}</h2>
                    <h3>{item.phone}</h3>
                    <p>{item.lorem}</p>
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="admin__remove"
                      >
                        remove
                      </button>
                      <button className="admin__success">success</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <AdminNumber />
            )}
          </div>
        </div>
      ) : (
        <p style={{ color: "red" }}>Authentication Error</p>
      )}
    </div>
  );
}

export default Admin;
