import React from "react";
import './WordCounter.css'

function WordCounter({ fileContent }) {

    const calculateWordsCount = (content) => {
        const words = content.split(/\s+/); // Split text into words using whitespace as delimiter
        const wordCountMap = {};
        words.forEach((word) => {
            word = word.toLowerCase(); // Convert word to lowercase for case-insensitive counting
            if (wordCountMap[word]) {
                wordCountMap[word]++;
            } else {
                wordCountMap[word] = 1;
            }
        });
        return wordCountMap;
    }
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
