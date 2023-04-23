import "./QuizExtra.css";
import character from "../Images/funtea/character.png";
import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-section">
        <div className="main-container">
          <div className="main-content">
            <div className="main-header">
              <h1 className="main-h1">
                Discover your ideal{" "}
                <span className="bubble-tea-sub">bubble tea!</span>
              </h1>
            </div>
            <div>
              <p className="main-slogan">
                Find your perfect bubble tea flavour with our fun and easy quiz!
              </p>
            </div>
            <div>
              <button className="cta-button" onClick={() => navigate("/Quiz")}>Start Quiz</button>
            </div>
          </div>
          <div>
            <img className="character-img" src={character} alt="Characters" />
          </div>
          <div className="gradient-bg">
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;