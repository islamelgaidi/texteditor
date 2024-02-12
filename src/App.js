import { useState } from 'react';
import './App.css';
import FileLoader from './components/FileLoader';
import FileContentDisplay from './components/FileContentDisplay';
import WordCounter from './components/WordCounter';
import ErrorMessage from './components/ErrorMessage.js';

function App() {
  const [fileContent, setFileContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleOnFileLoaded = (content) => {
    console.log('OnfileLoaded');
    setErrorMessage('')
    if (!content.trim()) {
      setErrorMessage('File is empty...');
    }
    setFileContent(content);  
  }
  return (
    <div className="container">
      <h2>Word Count Application</h2>

      <FileLoader OnfileLoaded={handleOnFileLoaded}></FileLoader>
      {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
      <div className="editor-container">
        {fileContent &&
          (
            <>

              <FileContentDisplay fileContent={fileContent}></FileContentDisplay>
              <WordCounter  fileContent={fileContent}></WordCounter>
            </>

          )
        }
      </div>
    </div>

  );
}

export default App;
