/////////////////////////////////////////////
// 1)Check a string palindrome or not

function CheckPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start++] !== str[end--]) return false;
  }
  return true;
}

//////////////////////////////////////////////
///2)Hamming Distance
// Input x='hello' y='hollr
// output=2 o and r different in y

function hammingDistance(x, y) {
  let output = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) output++;
  }
  return output;
}
// console.log(hammingDistance('hello','hwllr'))

////////////////////////////////////////////////
//3) Check anagram or not
function validAnagram(x, y) {
  const map = new Map();
  if (x.length !== y.length) return false;

  for (const n of x) {
    map.set(n, (map.has(n) || 0) + 1);
  }
  for (const n of y) {
    if (!map.has(n) || map.get(n) === 0) return false;
    map.set(n, map.get(n) - 1);
  }
  return true;
}

// console.log(validAnagram('listen','silent'))
// console.log(validAnagram('listen','sileot'))
