import React, { useState } from 'react'

export default function MyAppTextform({ heading = "Set Title Here", mode, showAlert }) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to upper case", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("converted to Lower case", "success");
  }

  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    showAlert("Text Cleared", "success");
  }

  const handleExtraSpace = () => {
    console.log('herererere');
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces handled", "success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3" >
          <h2 classame='mb-4'>{heading}</h2>
          <textarea type="email" className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white', color: mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <div className="container btn-container" >
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Upper Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lower Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Handle Extra Spaces</button>
        </div>
      </div>
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <h4>Summary Text</h4>
        <p>{text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} words and {text.trim().length} characters</p>
        <p>{text.trim().length === 0 ? 0 : 0.008 * text.trim().split(" ").length} Minutes Read.</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : <em>Nothing to Preview. </em>}</p>
      </div>
    </>
  )
}
