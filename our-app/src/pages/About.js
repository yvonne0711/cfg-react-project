import './QuizExtra.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import character from "../Images/funtea/character.png";

const About = (props) => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'centre', padding: ''}}>
    <h1 style={{ padding:'20px', textAlign: 'centre', fontSize: '3em', marginBottom: '0.5em', marginLeft:'5em' }}>About...</h1>
    <h2 style={{ fontSize: '4em', lineHeight: '1.2em', margin: 0 }}>&nbsp;</h2>
    <br>
    </br>
    <br>
    </br>

    <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2 className="main-content" style={{ marginLeft: '10em' }}> 
          Take our fun and easy quiz to find out what your new favourite bubble tea flavour is! You can use our app to choose the ideal bubble tea for  you by answering a few short questions about your taste preferences.  We have everything you want, whether you prefer it sweet, fruity, or creamy.
          <br></br>    
          <br></br>
          <br></br> 
          Try it now and treat yourself to a pleasantly refreshing drink!
          </h2>
          <br></br>
          <br></br>
          <p style={{ marginLeft: '15em' }}>
        <button className="cta-button" onClick={() => navigate("/Quiz")}>Start Quiz</button>
        </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={character} alt="Milk tea" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
        <div className="gradient-bg"></div>
      </div>
    </div>

);
}

  export default About;

  /* previous code
  const About = () => {
    return <> <h1>About</h1>
    <p className="aboutText">Take our fun and easy quiz to find out what your new favourite bubble  tea flavour is! You can use our app to choose the ideal bubble tea for  you by answering a few short questions about your taste preferences.  We have everything you want, whether you prefer it sweet, fruity, or creamy.</p>  
                  <button className="cta-button">Start Quiz</button>
            </div>
    </>  
    export default About;
    */