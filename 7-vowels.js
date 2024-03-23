/*Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
--- Directions
'i', 'o', and 'u'.
--- Examples
  vowels('Hi There!') --> 3
  vowels('How are you?') --> 5
  vowels('Coding Money') --> 4
  vowels('why?') --> 0 */

function vowels(str) {
  const vowels = "aeiou".split("");
  let count = 0;
  str.split("").forEach((char) => {
    if (vowels.includes(char)) count++;
  });
  return count;
}

console.log(vowels("Hello World"));
