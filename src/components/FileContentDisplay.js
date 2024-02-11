import React from "react";
import './FileContentDisplay.css'
function FileContentDisplay({ fileContent }) {
    return (
        <div class="editor">
             <h2>File Content</h2>
            <div className="editor-inner " id="file-content" >
               
                <pre>{fileContent}</pre>
            </div>
        </div>
    )

}

export default FileContentDisplay;