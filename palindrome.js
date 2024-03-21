/* --Directions
Given a string, return true if the string is a palindrome
or false if it's not. Palindromes are strings that form
the same word if reversed

--Examples:
palindrome("kayak") === true
palindrome("madam") === true
palindrome("thanos") === false
*/

function palindrome(str) {
  return str === str.split("").reverse().join("");
}
//every(), two-pointer

function palindromeEvery(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - index - 1]);
}

function palindromeTwoPointer(str) {
  let left = 0;
  let right = (str.length - 1);

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(palindromeTwoPointer("kayak"));
