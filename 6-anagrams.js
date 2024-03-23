/*--- Directions
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
anagrams('coding money', 'money coding') --> True
anagrams('RAIL! SAFETY!', 'fairy tales') --> True
anagrams('Hi there', 'Bye there') --> False
*/

function anagrams(stringA, stringB) {
  return makeAnagramArg(stringA) === makeAnagramArg(stringB);
}

//Clean using regex
function cleanStrRegex(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

//clean using ascii
function cleanStr(str) {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    .join("");
}

console.log(anagrams("Hi there", "Bye there"));
