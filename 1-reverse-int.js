/* 
--Directions
Given an integer, return an integer that is the reverse
ordering of numbers.
--Examples
reverseInt(15) === 51
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-15) === -51
reverseInt(-90) === -9
*/

function reverseInt(n) {
  let rev = parseInt(String(n).split("").reverse().join(""));

  return n > 0 ? rev : -rev;
}

function reverseIntA(n) {
  let rev = String(n).split("").reverse().join("");
  return parseInt(rev) * Math.sign(n);
}

console.log(reverseIntA(-900));
