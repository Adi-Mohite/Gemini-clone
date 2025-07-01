import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context.jsx";

const Main = () => {
  const [input, setInput] = useState("");
  const { onSent, recentPrompts, response } = useContext(Context);

  const handleSend = () => {
    if (input.trim() !== "") {
      onSent(input);
      setInput("");
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Adarsh</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card" onClick={() => onSent("What is your name?")}>
            <p>What is Your Name</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card" onClick={() => onSent("What is your favorite color?")}>
            <p>Which is Your favourite color</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card" onClick={() => onSent("In which standard do you study?")}>
            <p>In which std you are studing in </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
            <p>Imporove the readability of the folling code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img 
                src={assets.send_icon} 
                alt="" 
                onClick={handleSend} 
                style={{ cursor: "pointer" }} 
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may generate inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
