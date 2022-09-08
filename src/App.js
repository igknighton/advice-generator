import './App.css';
import divider from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
import {useState} from "react";
function App() {


    const [quote,setQuote] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae delectus fugiat iste, quasi quo?');
    const [adviceNumber,setAdviceNumber ] = useState('');

    const loadQuote = async () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const {id,advice} = data.slip;
                setQuote(advice);
                setAdviceNumber(id);
                }
            )
            .catch(err => console.error(err));
    }


  return (
          <div className="container">
              <div className="adviceNumber">
                  Advice #{adviceNumber}
              </div>
              {quote}
              <img src={divider} width={444} height={16} alt={'divider'}/>
              <div className="button">
                  <img src={dice} onClick={loadQuote} className="button" alt={'dice'}/>
              </div>
          </div>
  );
}

export default App;
