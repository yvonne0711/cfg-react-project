import './QuizExtra.css';
import '../App.css';
//import '.../navbar.js';
import character from "../Images/funtea/character.png";


const ResultsVT = () => {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Wow, great choice... You got</h1>
    <h2 style={{ fontSize: '4em', lineHeight: '1.2em', margin: 0 }}>Vegetable tea&nbsp;</h2>
    <br>
    </br>
    <br>
    </br>

    <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'left', lineHeight: '1.5em', margin: '5rem 0 0 30%' }}> 
          We would recommend our vegetable tea. Enjoy a tea full of antioxidants and a better night's sleep. This is a very good choice for those whose bodies are in need of a little TLC, we add a hug to every cup!
          </h2>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={character} alt="Vegetable tea" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      </div>
    </div>

);
}



export default ResultsVT;