import React from "react";
import './WordCounter.css'
import { calculateWordsCount } from "../utils/calculateWordCount";

function WordCounter({ fileContent }) {

    const wordCount = calculateWordsCount(fileContent);
    
    return (
        <div className='word-counter'>
              <h2>Word Count</h2>
            <div className="word-counter-inner" id="word-count">              
                <ul>
                    {Object.keys(wordCount).map((word, index) => (
                        <li key={index}>
                            ({index + 1})  {word}

                            <span className="counter"> [{wordCount[word]}]</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WordCounter;
