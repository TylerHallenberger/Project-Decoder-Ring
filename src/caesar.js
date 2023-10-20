// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function toCharCode(splitInput) {
    return splitInput.map((char) => {
      const charCode = char.toLowerCase().charCodeAt();
      //return within charCode boundaries either the letter @ charCode or return a space and other punctuation.
      return charCode >= 97 && charCode <= 122 ? charCode : char;
    });
  }

  function caesar(input, shift, encode = true) {
    //check if shift is within bounds
    if (shift > 25 || shift < -25 || !shift) {
      return false;
    }
    
    // inverting the shift to decode
    if (encode === false) {
      shift = shift * -1;
    }
    
    //create an array of characters for string
    let inputArray = input.split("");
    let inputNumbers = toCharCode(inputArray);

    // applies shift characters, excluding spaces and punctuation
    let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });


    let correctNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    //converts unicode back into a string for the resulting output (will output Spaces as well).
    let outputArray = correctNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
