import React from "react";
import { useState } from "react";
import "./Form.scss";

function Form() {
  const [Github, setGithub] = useState("");
  const [Cloudinary, setCloudinary] = useState("");
  const submit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_POST}`, {
      method: "POST",
      body: JSON.stringify({ Github, Cloudinary }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="Github">Github</label> <br />
      <input
        type="Github"
        name="Github"
        value={Github}
        onChange={(e) => setGithub(e.target.value)}
      />
      <br />
      <label htmlFor="Cloudinary">Cloudinary</label> <br />
      <input
        type="Cloudinary"
        name="Cloudinary"
        value={Cloudinary}
        onChange={(e) => setCloudinary(e.target.value)}
      />
      <br />
      <button type="submit">Send it!</button>
    </form>
  );
}
export default Form;
