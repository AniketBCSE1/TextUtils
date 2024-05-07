import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () =>{
        let newtext = '';
        setText(newtext)
        props.showAlert("Text cleared","success");
    }

    // const InfontSize = () =>{
    //     let inc = Number(myFont.fontSize.substring(0,2))
    //     if (inc<40){
    //         inc=inc+2
    //     }
    //     console.log(inc)
    //     setMyFont({
    //         fontSize:inc.toString()+'px'
    //     })
    //     props.showAlert(`Font size increased to ${inc}px`,"success");
    // }
    // const DefontSize = () =>{
    //     let inc = Number(myFont.fontSize.substring(0,2))
    //     if (inc>16){
    //         inc=inc-2
    //     } 
    //     console.log(inc)
    //     setMyFont({
    //         fontSize:inc.toString()+'px'
    //     })
    //     props.showAlert(`Font size decreased to ${inc}px`,"success");
    // }
    
    const copyText = () =>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied","success");
    }

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    
    const [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8" style={{
                        backgroundColor: props.mode==='dark'?'gray':'white',
                        color:props.mode==='dark'?'white':'black'
                    }}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-3' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove extra Spaces</button>
                
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text above to preview here"}</p>
            </div>
        </>
    )
}
