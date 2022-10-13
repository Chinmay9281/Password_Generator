import React from 'react';
import { useState } from 'react';
import './App.css';

import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character';

function App() {

  const [password, setPassword] = useState("");
  const [isNumbers, setIsNumbers] = useState(false);
  const [isUpperCaseLetters, setIsUpperCaseLetters] = useState(false);
  const [isLowerCaseLetters, setIsLowerCaseLetters] = useState(false);
  const [isSpecialCharacters, setIsSpecialCharacters] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  // const [isDanger, setIsDanger] = useState(false);
  const [length, setLength] = useState(26);

  const handleLengthChange = (e) => {
    // console.log(e.target.value);
    setLength(e.target.value)
  }

  const handleChangeUpperCaseLetter = (e) => {
    // console.log(e.target.checked);
    setIsUpperCaseLetters(e.target.checked);
  }

  const handleChangeLowerCaseLetter = (e) => {
    // console.log(e.target.checked);
    setIsLowerCaseLetters(e.target.checked);
  }

  const handleChangeNumbers = (e) => {
    setIsNumbers(e.target.checked);
  }

  const handleChangeSpecialCharacters = (e) => {
    setIsSpecialCharacters(e.target.checked);
  }

  const copyToClipBoard = () => {
    if (password.length > 0) {
      setIsAlert(true);
      navigator.clipboard.writeText(password);
    } 
    // else {
    //   setIsDanger(true);
    // }
    setTimeout(() => {
      setIsAlert(false);
      // if(!isDanger){
      //   setIsDanger(true);
      // }
    }, 5000);
  }

  const generatePassword = () => {
    var passwordGeneratorString = "";

    if (isUpperCaseLetters) {
      passwordGeneratorString += upperCaseLetters;
    }
    if (isLowerCaseLetters) {
      passwordGeneratorString += lowerCaseLetters;
    }
    if (isNumbers) {
      passwordGeneratorString += numbers;
    }
    if (isSpecialCharacters) {
      passwordGeneratorString += specialCharacters;
    }

    var result = "";

    var lengthOfTotalString = passwordGeneratorString.length;

    for (let index = 0; index < length; index++) {
      result += passwordGeneratorString.charAt(Math.floor(Math.random() * lengthOfTotalString))
    }

    setPassword(result);
  }

  return (
    <div className="App">
      <div className='Alert'>
        {
          isAlert &&
          (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Text Copied</strong>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )
        }
        {/* {
          isDanger &&
          (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Please Generate a password!</strong>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )
        } */}
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">PASSWORD GENERATOR</h5>
          <div className="password__generator">
            <input className="password-text-holder" value={password} />
            <button className='copy-button' onClick={copyToClipBoard}>
              <i>COPY</i>
            </button>
          </div>
          {/* For Length of Password */}
          <div className="card-text">
            <div className="input-group mb-3">
              <select type="number" onChange={handleLengthChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
              </select>
              <span className="input-group-text" id="inputGroup-sizing-default">Length</span>
            </div>
          </div>
          {/* For uppercase letters */}
          <div className="card-text">
            <div className="input-group-text">
              <input className="form-check-input mt-0" onChange={handleChangeUpperCaseLetter} type="checkbox" value="" aria-label="Checkbox for following text input" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Add Uppercase Letters</span>
            </div>
          </div>
          {/* For lowercase letters */}
          <div className="card-text">
            <div className="input-group-text">
              <input className="form-check-input mt-0" onChange={handleChangeLowerCaseLetter} type="checkbox" value="" aria-label="Checkbox for following text input" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Add Lowercase Letters</span>
            </div>
          </div>
          {/* For Numbers */}
          <div className="card-text">
            <div className="input-group-text">
              <input className="form-check-input mt-0" onChange={handleChangeNumbers} type="checkbox" value="" aria-label="Checkbox for following text input" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Add Numbers</span>
            </div>
          </div>
          {/* For Special Characters */}
          <div className="card-text">
            <div className="input-group-text">
              <input className="form-check-input mt-0" onChange={handleChangeSpecialCharacters} type="checkbox" value="" aria-label="Checkbox for following text input" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Add Special Characters</span>
            </div>
          </div>
          <button className='generate-btn' onClick={generatePassword}>GENERATE PASSWORD</button>
        </div>
      </div>
    </div>
  );
}

export default App;
