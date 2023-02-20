// import React from "react";
import React, { useState } from 'react'
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text Here");

  const handleOnChange = (event) => { //Handeling On Change Event in TextArea
    setText(event.target.value)
  }

  const handleUpClick = () => { //Handeling On Click event in Convert To Uppercase Button
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {  //Handeling On Click Event On Convert To Lowercase Button
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearText = () => {
    setText("")
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  }

  const handleRemoveSpace = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  }

  const handleCountWord = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    alert(`Number of Words: ${words.length}`);
  }

  const handleCountLetters = () => {
    const letters = text.replace(/[^a-zA-Z]/g, '');
    alert(`Number of letters: ${letters.length}`);
  }

  const handleCamelCase = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const camelCase = words.map((word, index) => {
      // if (index === 0) {
      //   return word.toLowerCase();
      // } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    ).join(' ');
    setText(camelCase);
  };

  return (
    <div>
      <div className="mb-2 text-center">
        <h1><label htmlFor="exampleFormControlTextarea1" className="form-label text-decoration-underline">{props.heading}</label></h1>
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="10"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary my-3 mx-1 " onClick={handleLowClick}>Lowercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCamelCase}> Camelcase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleRemoveSpace}> Remove Extra Space</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCountWord}> Count Words</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCountLetters}> Count Letters</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCopyText}> Copy All Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleClearText}> Clear All Text</button>
      </div>
      <div className="container">
        <h3>Text Summery </h3>
        <p>Words:- {text.split(" ").length - 1}</p>
        <p>Characters:- {text.length}</p>
        <p>Required Time To Read:- {0.1 * text.split(" ").length} sec.</p>
        <h3> Preview Text</h3>
        <p> {text}</p>
      </div>
    </div>
  );
}

