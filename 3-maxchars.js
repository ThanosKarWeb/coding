/*--Directions
Given a string, return the character that is most
commonly used in the string.
--Examples
maxChar("abccccccccd") === "c"
maxChar("apple 1231111") === "1"  */

function maxChar(str) {
  // Create an object to store the count of each character
  const charCount = {};

  // Iterate through the string and count each character
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  // Find the character with the maximum count
  let maxChar = "";
  let maxCount = 0;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}

console.log(maxChar("hello")); // Output: 'l'
console.log(maxChar("apple")); // Output: 'p'