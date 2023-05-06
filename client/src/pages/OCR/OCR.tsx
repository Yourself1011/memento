import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';

const OCR = () => {
  const [imagePath, setImagePath] = useState<string>("");
  const [text, setText] = useState<string | undefined>("");
  const [confidence, setConfidence] = useState<number | undefined>();
 
  const handleChange = (event:any) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

  const handleClick = () => {
  
    Tesseract.recognize(
      imagePath,'eng',
      { 
        // logger: m => console.log(m)
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score
      setConfidence(result?.data.confidence)
      setText(result?.data.text);
  
    })
  }

  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual image uploaded</h3>
        <img 
           src={imagePath} className="App-logo" alt="logo"/>
        
          <h3>Extracted text</h3>
        <div className="text-box">
          <p> asdf {text} </p>
          <p>confidence: {confidence}</p>
        </div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}> convert to text</button>
      </main>
    </div>
  );
}

export default OCR
