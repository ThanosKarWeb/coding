/*
--Directions
Given a string, return a new string with the reversed order of characters
--Examples
reverse('hi') === 'ih'
reverse('ThanosKar') === 'raKsonahT'
*/

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str.charAt(i);
  }
  return revStr;
}

function reverseA(str) {
  let revStr = "";
  for (let char of str) {
    revStr = char + revStr;
  }
  return revStr;
}

function reverseB(str) {
  return str.split("").reverse().join("");
}

console.log(reverseB("ReversedWord"));
