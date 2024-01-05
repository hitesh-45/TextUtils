import React, { useState } from 'react';


export default function Textfrom(props) {
    const handleUPC =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("converted to upper  case",'success')
    }
    const handleLOC =()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showalert("converted to lower  case",'success')
  }
    const handleOC =(event)=>{
        setText(event.target.value)
    }
    const handleClear =()=>{
      
      setText(" ")
      props.showalert('text cleared','success')
    }
    const handleInverse =()=>{
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showalert('text inversed','success')
  }

    const [text, setText]= useState('');
  return (
    <>
  <div className='container'   style={{color :props.mode=== 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOC} style={{ backgroundColor :props.mode==='dark'?'grey':'white'}} id="mybox" rows="10"></textarea>
    </div>
      <button className='btn btn-primary mx-2' onClick={handleUPC} > convert to uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLOC} > convert to lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClear} > Clear text</button>
      <button className='btn btn-primary mx-2' onClick={handleInverse} > Inverse case</button>

  </div>
  <div className="container  my-3" style={{color :props.mode==='dark'?'white':'black'}}>
    <h1>Text Summary</h1>
    <p>{text.split(/\s+/).length} words and {text.length} characters</p>
    <h2>Preview</h2>
  <p>{text}</p>
  </div>
    </>
  )
}
