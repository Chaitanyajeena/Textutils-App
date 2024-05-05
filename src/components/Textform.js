import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Text converted into uppercase successfully","success");
    }
    const handleLoClick = ()  =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Text converted into lowercase successfully","success");

    }
    const handleclearClick = () =>{
        let newText = ('');
        setText(newText);
        props.showalert("Text remove successfully!","success");
    }
    const handlereverseClick = () =>{
        let newText = "";
        for(let i=text.length-1;i>=0;i--){
            newText += text[i];
        }
        return setText(newText);

    }
    const handlespeakClick = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handlecopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to clipboard!","success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowwercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlereverseClick}>Reverse text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlespeakClick}>Speak</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary!</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues it take for read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text for preview:"}</p>
    </div>
    </>
  )
}