/* 
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
*/


// O(n^2)
function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j > n - 1 + i || j < n - 1 - i) print += " ";
      else print += "#";
    }
    console.log(print);
  }
}

//O(n)
function pyramidA(n) {
  const maxWidth = 2 * n - 1;
  for (let i = 0; i < n; i++) {
    const numChars = 2 * i + 1;
    const numSpaces = (maxWidth - numChars) / 2;
    const levelStr =
      " ".repeat(numSpaces) + "#".repeat(numChars) + " ".repeat(numSpaces);
    console.log(levelStr);
  }
}

pyramidA(4);

