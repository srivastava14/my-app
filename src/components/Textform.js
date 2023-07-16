import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpclick = () => {
    console.log("uppercase was clicked" + text);
    let newt=text.toUpperCase();
    setText(newt);
    props.showalert("Converted to Upper case", "success");
  }

  const handleLowclick = () => {
    console.log("uppercase was clicked" + text);
    let newt=text.toLowerCase();
    setText(newt);
    props.showalert("Converted to Lower case", "success");
  }

  const handleClearclick = () => {
    console.log("uppercase was clicked" + text);
    let newt='';
    setText(newt);
    props.showalert("Converted to clear", "success");
  }

  const copytext=() => {
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied", "success");
  }

  const handleonChange = (event) => {
    console.log("clicked on change");
    setText(event.target.value);
  }

  const [text, setText] = useState("enter ur text here bro");
  // text is variable we want to change, setText is the funct which allows us to change
  //settext("value change karo");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#1a1c27'}}>
         <h1>{props.head}</h1>   
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>

        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>clear text</button>
        <button className="btn btn-primary mx-2" onClick={copytext}>Copy text</button>
        </div>      
    </div>
    <div className="container my-4"  style={{color: props.mode==='dark'?'white':'#1a1c27'}}>

      <h1>Your TEXTs</h1>
      <p>{text.split(" ").length} no of words and {text.length} no of characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>  
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter ur text here to preview"}</p>
    </div>


    </>
  )
}
