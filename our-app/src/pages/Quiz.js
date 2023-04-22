import './extra.css';
import Results from './Results.js';

const Quiz = () => {
    return <><h1>Quiz</h1>;
    <h3 className="questionNumber">Question 1</h3>
    <p className="questionPhrase">Do any of the following apply to you?</p>
    <p className="answer">I have a food allergy / intolerance</p>
    <p className="answer">I am diabetic</p>
    <p className="answer">I'm watching my weight</p>

    <h3 className="questionNumber">Question 2</h3>
    <p className="questionPhrase">Which of these pictures inspires your tastebuds? <span italics>Click all that apply</span></p>
    <img src="Images\Q2\Q2image1.png" alt="milk tea"/>
    <img src="Images\Q2\Q2image2.png" alt="fruit tea"/>
    <img src="Images\Q2\Q2image3.png" alt="brown sugar tea"/>
    <img src="Images\Q2\Q2image4.png" alt="vegetable tea"/>
    <img src="Images\Q2\Q2image5.png" alt="camomile tea"/>

    <h3 className="questionNumber">Question 3</h3>
    <p className="questionPhrase">Which of these chocolates would you prefer to receive?</p>
    <img src="Images\Q3\Q3image1.png" alt="exuberantly fruity"/>
    <img src="Images\Q3\Q3image2.png" alt="milk to caramel"/>
    <img src="Images\Q3\Q3image3.png" alt="patisserie"/>
    <img src="Images\Q3\Q3image4.png" alt="everything"/>
    <img src="Images\Q3\Q3image5.png" alt="serious dark"/>
    <img src="Images\Q3\Q3image6.png" alt="tipsy truffles"/>

    <h3 className="questionNumber">Question 4</h3>
    <p className="questionPhrase">Choose your preferred sugar level?</p>
    <img src="Images\Q4\sugarLevel.png" alt="sugar meter"/>

    <h3 className="questionNumber">Question 5</h3>
    <p className="questionPhrase">Which colours do you like? <italics>Tick all that apply:</italics></p>
    <img src="Images\Q5\colours.png" alt="Blue Lime Crimson Rose Aqua"/>

    <h3 className="questionNumber">Question 6</h3>
    <p className="questionPhrase">Which of these rooms fit best in your home?</p>
    <img src="Images\Q6\Q6image1.png" alt="home with clutter"/>
    <img src="Images\Q6\Q6image2.png" alt="home with whites and space"/>
    <img src="Images\Q6\Q6image3.png" alt="home with fireplace and candles"/>
    <img src="Images\Q6\Q6image4.png" alt="home with pets"/>
    <img src="Images\Q6\Q6image5.png" alt="home with kids' toys"/>

    <h3 className="questionNumber">Question 7</h3>
    <p className="questionPhrase">Which would be your prefered holiday? <italics>Tick all that apply:</italics></p>
    <img src="Images\Q7\Q7image1.png" alt="ski holiday"/>
    <img src="Images\Q7\Q7image2.png" alt="beach holiday"/>
    <img src="Images\Q7\Q7image3.png" alt="city break"/>
    <img src="Images\Q7\Q7image4.png" alt="camping holiday"/>
    <img src="Images\Q7\Q7image5.png" alt="spa break"/>

    </>


  };
  
  export default Quiz;