import './App.css';
import divider from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
function App() {


    const randomQuote = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae delectus fugiat iste, quasi quo?';
    const adviceNumber = 117;
  return (
          <div className="container">
              <div className="adviceNumber">
                  Advice #{adviceNumber}
              </div>
              {randomQuote}
              <img src={divider} width={444} height={16} alt={'divider'}/>
              <div className="button">
                  <img src={dice} className="button" alt={'dice'}/>
              </div>
          </div>
  );
}

export default App;
