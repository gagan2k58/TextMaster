import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("upper case was used." + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Upper Case","success");
  
    }
    
    const handleLoClick = ()=> {
      // console.log("upper case was used." + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to Lower Case","success");

  }
  
  const handleClearClick = ()=> {
    // console.log("upper case was used." + text);
    let newText = ("");
    setText(newText)

}
    
    const handleOnChange = (event)=> {
        // console.log("Text on change.")
        setText(event.target.value);
    }
    const [text,setText] = useState('')

  return (
    <>
    <div className ={`container text-${props.mode === "light"? "dark":"light"}`}>
        <h1>{props.heading}</h1>
         <div class="mb-3">
              <textarea class="form-control" value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>convert to Uppercase</button>
         <button className="btn btn-warning mx-2 my-1" onClick={handleLoClick}>convert to lowercase</button>
         <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>clear</button>


    </div>
    <div className={`container my-3 text-${props.mode === "light"? "dark":"light"}`} >
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write something in text box to preview"}</p>
    </div>
    </>
  )
}
