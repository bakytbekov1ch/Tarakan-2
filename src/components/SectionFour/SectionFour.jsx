import React, { useState } from "react";
import "./SectionFour.scss";
import axios from "axios";
import { t } from "i18next";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/tarakan";

function SectionFour() {
  const [post, setPost] = useState({ body: "", lorem: "", phone: "" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
    post.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(API, post)
      .then((response) => {
        console.log(response);
        setPost({ body: "", lorem: "", phone: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="SectionFour">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="SectionFour__content">
            <textarea
              onChange={handleInput}
              name="lorem"
              value={post.lorem}
              placeholder={t("reviews")}
            ></textarea>
            <div style={{ display: "grid", gap: "10px" }}>
              <input
                onChange={handleInput}
                name="body"
                type="text"
                value={post.body}
                placeholder={t("fcs")}
              />

              <input
                onChange={handleInput}
                value={post.phone}
                name="phone"
                type="text"
                placeholder={t("number")}
              />
              <button>{t("submit")}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SectionFour;
