import './QuizExtra.css';
import Q2image1 from './Q2image1.png' 
import Q2image2 from './Q2image2.png' 
import Q2image3 from './Q2image3.png' 
import Q2image4 from './Q2image4.png' 
import Q2image5 from './Q2image5.png' 

import Q3image1 from './Q3image1.jpg' 
import Q3image2 from './Q3image2.jpg' 
import Q3image3 from './Q3image3.jpg' 
import Q3image4 from './Q3image4.jpg' 
import Q3image5 from './Q3image5.jpg'
import Q3image6 from './Q3image6.jpg'

import sugarLevel from './sugarLevel.png' 

import coloursBlue from './coloursBlue.jpg' 
import coloursGreen from './coloursGreen.jpg' 
import coloursCrimson from './coloursCrimson.jpg' 
import coloursPink from './coloursPink.jpg' 
import coloursAqua from './coloursAqua.jpg' 

import Q6image1 from './Q6image1.png' 
import Q6image2 from './Q6image2.png' 
import Q6image3 from './Q6image3.png' 
import Q6image4 from './Q6image4.png' 
import Q6image5 from './Q6image5.png' 

import Q7image1 from './Q7image1.png' 
import Q7image2 from './Q7image2.png' 
import Q7image3 from './Q7image3.png' 
import Q7image4 from './Q7image4.png' 
import Q7image5 from './Q7image5.png' 

import ResultsBST from './Results.js'
import ResultsCT from './ResultsBST.js'
import ResultsFT from './ResultsCT.js'
import ResultsVT from './ResultsFT.js'
import Results from './ResultsVT.js'

import React from 'react';
import { useNavigate } from "react-router-dom";

function warning() {
    alert('Please note this is just a fun quiz, please do not accept the recommendation as this could damage your health and potentially result in death!');
  }

  function alcohol() {
    alert('Did you expect alcohol in your bubble tea?! Pick another!');
  }

  function randomNumber() {
    Math.floor(Math.random() * 5);
        }

  function navigateResults() {
    Results = ("/Results")
    ResultsBST = ("/ResultsBST")
    ResultsCT = ("/ResultsCT")
    ResultsFT = ("/ResultsFT")
    ResultsVT = ("/ResultsVT")

    let x = randomNumber()
    
    if ( x === 0) {
    return(
    x = Results)
   
  }
  if (x === 4) {
    return(
      x = ResultsBST)
    
  }
  if (x === 3) {
    return(
      x = ResultsCT)

  }  if (x === 2) {
    return(
      x = ResultsFT
    )
        }
  if (x === 1) {
    return(
    x = ResultsVT)
}
  }


  const Quiz = (props) => {
    const navigate = useNavigate();



    return <>
    <h1>Quiz</h1>
    <h3 className="questionNumber">Question 1</h3>
    <p className="questionPhrase">Do any of the following apply to you?</p>
    <div><button className="Q1Danger" onClick={warning}>I have a food allergy or an intolerance</button></div>
    <div><button className="Q1Danger" onClick={warning}>I am diabetic</button></div>
    <div><button className="Q1Danger" onClick={warning}>I'm watching my weight</button></div>


{/* attempting checkboxes

    <form action="/action_page.php">
    <input type="checkbox" id="issue1" name="issue1" value="allergy"><label for="issue1">I have a food allergy or an intolerance</label><br></br>
    <input type="checkbox" id="issue2" name="issue2" value="diabetic"><label for="issue2">I am diabetic</label><br></br>
    <input type="checkbox" id="issue3" name="issue3" value="weight"><label for="issue3">I am diabetic</label><br></br>
    <input type="submit" value="Submit"></input>
    </form>
*/}

    <h3 className="questionNumber">Question 2</h3>
    <p className="questionPhrase">Which of these pictures inspires your tastebuds? <span italics>Click all that apply</span></p>
    <img className="quizImageTea" src={Q2image1} alt="milk tea"/>
    <img className="quizImageTea" src={Q2image2} alt="fruit tea"/>
    <img className="quizImageTea" src={Q2image3} alt="brown sugar tea"/>
    <img className="quizImageTea" src={Q2image4}  alt="vegetable tea"/>
    <img className="quizImageTea" src={Q2image5} alt="camomile tea"/>

    <h3 className="questionNumber">Question 3</h3>
    <p className="questionPhrase">Which of these chocolates would you prefer to receive?</p>
    <img className="quizImageChocs" src={Q3image1} alt="milk to caramel"/>
    <img className="quizImageChocs" src={Q3image2} alt="exuberantly fruity"/>
    <img className="quizImageChocs" src={Q3image3}alt="patisserie"/>
    <img className="quizImageChocs" src={Q3image4} alt="everything"/>
    <img className="quizImageChocs" src={Q3image5} alt="serious dark"/>
    <img className="quizImageChocs" src={Q3image6} alt="tipsy truffles"/>
    <div><button className="Q3Alcohol" onClick={alcohol}>Tipsy truffles</button></div>


    <h3 className="questionNumber">Question 4</h3>
    <p className="questionPhrase">Choose your preferred sugar level?</p>
    <div><img className="quizImageSugar" src={sugarLevel} alt="sugar level"/>
    <p><input type="checkbox"/>Very low</p>
    <p><input type="checkbox"/> low</p>
    <p><input type="checkbox"/>Moderate</p>
    <p><input type="checkbox"/>High</p>
    <p><input type="checkbox"/>Very high</p></div>


    <h3 className="questionNumber">Question 5</h3>
    <p className="questionPhrase">Which colours do you like? <italics>Tick all that apply:</italics></p>
    <img className="quizColours" src={coloursBlue} alt="Blue"/>
    <img className="quizColours" src={coloursGreen} alt="Lime"/>
    <img className="quizColours" src={coloursCrimson} alt="Crimson"/>
    <img className="quizColours" src={coloursPink} alt="Rose"/>
    <img className="quizColours" src={coloursAqua} alt="Aqua"/>

    <h3 className="questionNumber">Question 6</h3>
    <p className="questionPhrase">Which of these rooms fit best in your home?</p>
    <img className="quizImageHome" src={Q6image1} alt="home with clutter"/>
    <img className="quizImageHome" src={Q6image2} alt="home with whites and space"/>
    <img className="quizImageHome" src={Q6image3} alt="home with fireplace and candles"/>
    <img className="quizImageDog" src={Q6image4}  alt="home with pets"/>
    <img className="quizImageToys" src={Q6image5}  alt="home with kids' toys"/>

    <h3 className="questionNumber">Question 7</h3>
    <p className="questionPhrase">Which would be your prefered holiday? <italics>Tick all that apply:</italics></p>
    <img className="quizImageHoliday" src={Q7image1}  alt="ski holiday"/>
    <img className="quizImageHoliday" src={Q7image2} alt="beach holiday"/>
    <img className="quizImageHoliday" src={Q7image3} alt="city break"/>
    <img className="quizImageHoliday" src={Q7image4} alt="camping holiday"/>
    <img className="quizImageHoliday" src={Q7image5} alt="spa break"/>
    
    <p>
    <button className="cta-button"  onClick={() => navigateResults()}>Random Answer!</button>
    </p>
    
    <p>
    <button className="cta-button"  onClick={() => navigate("/Results")}>View my result! Milk Tea</button>
    </p>
    <p>
    <button className="cta-button"  onClick={() => navigate("/ResultsBST")}>View my result! Brown Sugar Tea</button>
    </p>
    <p>
    <button className="cta-button"  onClick={() => navigate("/ResultsCT")}>View my result! Camomile Tea</button>
    </p>
    <p>
    <button className="cta-button"  onClick={() => navigate("/ResultsFT")}>View my result! Fruit Tea</button>
    </p>
    <p>
    <button className="cta-button"  onClick={() => navigate("/ResultsVT")}>View my result! Milk Tea</button>
    </p>
    </>


  };
  
  export default Quiz;

  /* trying to create the navigation to the quiz
  function resultNav() {
    const getRandomNumber = () => {
        Math.floor(Math.random() * 6);
            }
    const navigate = useNavigate

  if ( randomNumber == 5) {
      return ( () => navigate("/Results")
      )
  }
  if (randomNumber == 4) {
      return ( () => navigate("/ResultsBST")
      )
  }
  if (randomNumber == 3) {
      return ( () => navigate("/ResultsCT")
      )
  }
  if (randomNumber == 2) {
      return ( () => navigate("/ResultsFT")
      )
  }
  if (randomNumber == 1) {
      return ( () => navigate("/ResultsVT")
      )
  }
}

    <p>
    <button className="resultsButton" onClick={resultNav}>Random Answer!</button>
    </p>
*/
