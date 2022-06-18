import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRandomWord } from './APIcalls';
import { OptionButtons } from './OptionButtons';

function App() {
const [randWord1, setRandWord1] = useState('')
const [randWord2, setRandWord2] = useState('')
const [randWord3, setRandWord3] = useState('')
const [randWord4, setRandWord4] = useState('')
const [password, setPassword] = useState('Click Generate Below!')
const [specialChar, setSpecialChar] = useState('')
const [numbers, setNumbers] = useState('')
const [vizBool, setVizBool] = useState(false)

const specCharArray = ['!','@','#','$','%','^','&','*']
const randomSpecChar = specCharArray[Math.floor(Math.random()*specCharArray.length)]

const randomNumber = Math.floor(Math.random()*10000)



useEffect(
  () => {
    setPassword(randWord1 + '-' + randWord2 + '-' + randWord3 + '-' + randWord4)
  }, [randWord4]
)


const generatePassword = () => {
  setPassword('loading...')
  getRandomWord().then(setRandWord1)
  getRandomWord().then(setRandWord2)
  getRandomWord().then(setRandWord3)
  getRandomWord().then(setRandWord4)
  setVizBool(true)
}

const capitalizeFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const unCapitalizeFirst = str => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

const buttonViz = (vizBool) => {
  if (vizBool === false) {
    return <></>
  } else {
    return  <OptionButtons unCapitalizeFirst={unCapitalizeFirst} capitalizeFirst={capitalizeFirst} randomNumber={randomNumber} randomSpecChar={randomSpecChar} specialChar={specialChar} setSpecialChar={setSpecialChar} setNumbers={setNumbers} setPassword={setPassword} password={password} numbers={numbers}/>
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pass-Backwards</h1>
        <h2>Generate Random Passwords</h2>
        <p>{password}{numbers}{specialChar}</p>
        <button onClick={generatePassword}>Generate</button>
        <br></br>
        {buttonViz(vizBool)}
      </header>
    </div>
  );
}

export default App;
