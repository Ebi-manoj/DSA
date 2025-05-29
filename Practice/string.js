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

/////////////////////////////////////////////////
///hello world-> olleh dlrow

function reverseString(str) {
  let result = '';
  let word = '';
  for (let i = 0; i <= str.length; i++) {
    const char = str[i];

    if (char == ' ' || i === str.length) {
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }
      if (i !== str.length) result += ' ';
      word = '';
    } else {
      word += char;
    }
  }

  console.log(result);
}
// reverseString('hello world');

//////////////////////////////////////////////////
////Find longest palindrome substring
function substring(str) {
  let maxLength = 0;
  let startIdx = 0;

  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      if (checkPalindrome(str, start, end)) {
        if (end - start + 1 > maxLength) {
          maxLength = end - start + 1;
          startIdx = start;
        }
      }
    }
  }

  if (maxLength === 0) {
    console.log('No palindrome');
  } else {
    console.log(str.slice(startIdx, startIdx + maxLength));
  }

  function checkPalindrome(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
}
// substring('abbash')

/////////////////////////////////////////////////////
////Find the longest substring that doesnt have vowels

function substring() {
  const str = 'dtstarcatrs';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let index = 0;
  let s = 0;
  let e = str.length - 1;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      if (i - index > max) {
        max = i - index;
        e = i - 1;
        s = index;
      }
      index = i + 1;
    }
  }

  console.log(str.slice(s, e + 1));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////LEETCODE AND MY SOLUTIONS

///////////////////////////////
////LEETCODE-1768 Merge string alternatively

const mergeAlternately = function (word1, word2) {
  const length = Math.max(word1.length, word2.length);
  let output = '';
  for (let i = 0; i < length; i++) {
    if (word1[i] && word2[i]) {
      output += word1[i] + word2[i];
    } else {
      let slice = '';
      if (word1[i]) {
        slice = word1.slice(-(length - i));
      } else {
        slice = word2.slice(-(length - i));
      }
      return (output += slice);
    }
  }
  return output;
};
