// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  const engAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    //test if alphebet has all 26 characters
    if (alphabet.length !== 26) return false;
    const alphabetArray = alphabet.split('');

    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    // test for alphabet unique characters
    let uniqueLetter = true;
    alphabetArray.forEach(character => {
      const uniqueList = alphabetArray.filter(letter => letter === character);
      if (uniqueList.length > 1) uniqueLetter = false;
    });
    if (!uniqueLetter) return uniqueLetter;
    
    const inputArray = input.split('');

    
    return (encode ? subDecoderEncoder(inputArray, engAlphabet, alphabet)
                   : subDecoderEncoder(inputArray, alphabet, engAlphabet));

  }

  function subDecoderEncoder(messageArray, messageAlphabet,
                               translationAlphabet) {
    const result = [];
    // check each character, substitute the alternate alphabet, push to result
    messageArray.forEach(character => {
    
      const messageAlphabetIndex = messageAlphabet.indexOf(character);
      const translatedAlphabetArray = translationAlphabet.split('');
      // if it's a space, just push it on
      if (character === " ") {
        result.push(character);
      } else {
          try {
            if (messageAlphabetIndex === -1) {
              throw new Error (`"${character}" is not present`);
            };
            result.push(translatedAlphabetArray[messageAlphabetIndex]);
          } catch (err) {
            console.error(err);
          }
      }
    });
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
