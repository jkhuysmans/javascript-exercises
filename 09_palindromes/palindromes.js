const palindromes = function (word) {
    const cleanWord = word.replace(/[\W_ ]/g, "").toLowerCase()
    const wordArray = cleanWord.split("");
    let reverseWord = wordArray.slice().reverse();

    return wordArray.join() === reverseWord.join();
};

// Do not edit below this line
module.exports = palindromes;
