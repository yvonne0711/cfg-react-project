import './QuizExtra.css';
import React from 'react';


/* attempt to get the button working but it just brings you to the home page and the address bar has the path name below */
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate(); 

    return ( 
    <>
    <h1>About</h1>
    <p className="aboutText">Take our fun and easy quiz to find out what your new favourite bubble tea flavour is! You can use our app to choose the ideal bubble tea for  you by answering a few short questions about your taste preferences.  We have everything you want, whether you prefer it sweet, fruity, or creamy.</p>  
    <p>Try it now and treat yourself to a pleasantly refreshing drink!"</p>
    <hr />
      <p>
        <button className="cta-button" onClick={() => navigate("/Quiz")}>Start Quiz</button>
        </p>
        </>
    );
};
  
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