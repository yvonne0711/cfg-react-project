import './QuizExtra.css';
import '../App.css';
//import '.../navbar.js';
import image from "../Images/funtea/characters_png.png";


const Heading = () => {
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
          <h2 style={{ textAlign: 'left', lineHeight: '1.5em' }}> 
          &nbsp;We would recommend our milk tea. Enjoy a taste of this good &nbsp;old reliable, knowing that it will be exactly what you expected. &nbsp;Please be aware that we add MILK to every cup and that this &nbsp;helps keep your calcium levels up.
          </h2>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt="Milk tea" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      </div>
    </div>

);
}


const Results = () => {
    return (
    <div>
    {/* <Navbar /> */}
    <Heading />
    {/* <h1>Results</h1> */}
    {/* Other stuff?? */}
  </div>
);
    
    
}

export default Results;