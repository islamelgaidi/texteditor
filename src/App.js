import { useState } from 'react';
import './App.css';
import FileLoader from './components/FileLoader';
import FileContentDisplay from './components/FileContentDisplay';
import WordCounter from './components/WordCounter';
import ErrorMessage from './components/ErrorMessage.js';

function App() {
  const [fileContent, setFileContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [index, setIndex] = useState(0);
  const handleOnFileLoaded = (content) => {
    console.log('OnfileLoaded');
    setErrorMessage('')
    if (!content.trim()) {
      setErrorMessage('File is empty...');
    }
    setFileContent(content);
    setIndex((x) => x + 1);
  }
  return (
    <div className="container">
      <h2>Word Count Application</h2>

      <FileLoader OnfileLoaded={handleOnFileLoaded}></FileLoader>
      {errorMessage && <ErrorMessage key={'ER' + index} message={errorMessage}></ErrorMessage>}
      <div className="editor-container">
        {fileContent &&
          (
            <>

              <FileContentDisplay key={'FCD' + index} fileContent={fileContent}></FileContentDisplay>
              <WordCounter key={'WC' + index} fileContent={fileContent}></WordCounter>
            </>

          )
        }
      </div>
    </div>

  );
}

export default App;
