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

import colours from './colours.jpg' 


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

import Results from './Results.js';



const Quiz = () => {
    return <><h1>Quiz</h1>
    <h3 className="questionNumber">Question 1</h3>
    <p className="questionPhrase">Do any of the following apply to you?</p>
{/* attempting to create checkboxes for the allergy / intolerance / diabetes / weight
    <form action="/action_page.php">
    <input type="checkbox" id="issue1" name="issue1" value="allergy"><label for="issue1">I have a food allergy or an intolerance</label><br></br>
    <input type="checkbox" id="issue2" name="issue2" value="diabetic"><label for="issue2">I am diabetic</label><br></br>
    <input type="checkbox" id="issue3" name="issue3" value="weight"><label for="issue3">I am diabetic</label><br></br>
    <input type="submit" value="Submit"></input>
    </form>
*/}
    <p className="answer">I have a food allergy or an intolerance</p>
    <p className="answer">I am diabetic</p>
    <p className="answer">I'm watching my weight</p>

    <h3 className="questionNumber">Question 2</h3>
    <p className="questionPhrase">Which of these pictures inspires your tastebuds? <span italics>Click all that apply</span></p>
    <img className="quizImageMilkTea" src={Q2image1} alt="milk tea"/>
    <img className="quizImageFruitTea" src={Q2image2} alt="fruit tea"/>
    <img className="quizImageSugarTea" src={Q2image3} alt="brown sugar tea"/>
    <img className="quizImageVegetableTea" src={Q2image4}  alt="vegetable tea"/>
    <img className="quizImageCamomileTea" src={Q2image5} alt="camomile tea"/>

    <h3 className="questionNumber">Question 3</h3>
    <p className="questionPhrase">Which of these chocolates would you prefer to receive?</p>
    <img className="quizImageChocs" src={Q3image1} alt="milk to caramel"/>
    <img className="quizImageChocs" src={Q3image2} alt="exuberantly fruity"/>
    <img className="quizImageChocs" src={Q3image3}alt="patisserie"/>
    <img className="quizImageChocs" src={Q3image4} alt="everything"/>
    <img className="quizImageChocs" src={Q3image5} alt="serious dark"/>
    <img className="quizImageChocs" src={Q3image6} alt="tipsy truffles"/>

    <h3 className="questionNumber">Question 4</h3>
    <p className="questionPhrase">Choose your preferred sugar level?</p>
    <img className="quizImageSugar" src={sugarLevel} alt="sugar level"/>

    <h3 className="questionNumber">Question 5</h3>
    <p className="questionPhrase">Which colours do you like? <italics>Tick all that apply:</italics></p>
    <img className="quizImageColours" src={colours} alt="Blue Lime Crimson Rose Aqua"/>

    <h3 className="questionNumber">Question 6</h3>
    <p className="questionPhrase">Which of these rooms fit best in your home?</p>
    <img className="quizImageHome" src={Q6image1} alt="home with clutter"/>
    <img className="quizImageHome" src={Q6image2} alt="home with whites and space"/>
    <img className="quizImageHome" src={Q6image3} alt="home with fireplace and candles"/>
    <img className="quizImageHome" src={Q6image4}  alt="home with pets"/>
    <img className="quizImageHome" src={Q6image5}  alt="home with kids' toys"/>

    <h3 className="questionNumber">Question 7</h3>
    <p className="questionPhrase">Which would be your prefered holiday? <italics>Tick all that apply:</italics></p>
    <img className="quizImageHoliday" src={Q7image1}  alt="ski holiday"/>
    <img className="quizImageHoliday" src={Q7image2} alt="beach holiday"/>
    <img className="quizImageHoliday" src={Q7image3} alt="city break"/>
    <img className="quizImageHoliday" src={Q7image4} alt="camping holiday"/>
    <img className="quizImageHoliday" src={Q7image5} alt="spa break"/>

    </>


  };
  
  export default Quiz;