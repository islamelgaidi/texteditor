export  const calculateWordsCount = (content) => {
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