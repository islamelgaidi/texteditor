import React, { useRef } from 'react';
import './FileLoader.css';
function FileLoader({OnfileLoaded}){
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
    const OnfileChange =(event)=>{
     const file= event.target.files[0];
     readTxtFile(file);
    };
    const readTxtFile = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const fileContent = reader.result;
            OnfileLoaded(fileContent);
        };
        reader.readAsText(file);
    };
    return (
    <>   
        <input   ref={hiddenFileInput} type='file'  onChange={OnfileChange} accept='.txt' ></input>
        <button id="load-button"  onClick={handleClick}>Load File</button>
    </> 
    );
}


export default FileLoader;