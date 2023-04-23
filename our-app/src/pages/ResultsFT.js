import './QuizExtra.css';
import '../App.css';
//import '.../navbar.js';
import character from "../Images/funtea/character.png";


const ResultsFT = () => {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Wow, great choice... You got</h1>
    <h2 style={{ fontSize: '4em', lineHeight: '1.2em', margin: 0 }}>Fruit tea&nbsp;</h2>
    <br>
    </br>
    <br>
    </br>

    <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'left', lineHeight: '1.5em', margin: '5rem 0 0 30%' }}> 
          We would recommend our fruit tea. Of course you're sweet enough and this is the perfect combination of sweetness and freshness. Enjoy the extra vitamins we add to every cup to ensure you're at your peak!
          </h2>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={character} alt="Fruit tea" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      </div>
    </div>

);
}




export default ResultsFT;