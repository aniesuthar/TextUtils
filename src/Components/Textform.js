import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase' , 'success')
    }
    const handleLowClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted toLowercase' , 'success')
    }
    const handleClearText = () => {
        setText('');
        props.showAlert('Text Cleared' , 'success')
    }


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
        
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert('text Copied to clipboard' , 'success')
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaced removed' , 'success')
    }
    
    const [text, setText] = useState('Enter text here');


    return (
        <>
            <div className="container my-3">
                <h1 style={{color: props.mode=== 'dark'?'white': 'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark'? "#011338" : 'white', color: props.mode=== 'dark'?'white': 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color: props.mode=== 'dark'?'white': 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((words)=>{return words.length !== 0;}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} mins read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
