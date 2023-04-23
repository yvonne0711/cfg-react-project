import './QuizExtra.css';
import '../App.css';
//import '.../navbar.js';
import character from "../Images/funtea/character.png";


const Results = () => {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Wow, great choice... You got</h1>
    <h2 style={{ fontSize: '4em', lineHeight: '1.2em', margin: 0 }}>Milk tea&nbsp;</h2>
    <br>
    </br>
    <br>
    </br>

    <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'left', lineHeight: '1.5em', margin: '5rem 0 0 30%' }}> 
          We would recommend our milk tea. Enjoy a taste of this good old reliable, knowing that it will be exactly what you expected. Please be aware that we add MILK to every cup and that this helps keep your calcium levels up.
          </h2>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={character} alt="Milk tea" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
        <div className="gradient-bg-results"></div>
      </div>
    </div>

);
}



export default Results;