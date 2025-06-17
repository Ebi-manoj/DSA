//////////////////////////////////////////////////////////////////////////
//1) Print n to 1

function question1() {
  function print(n) {
    console.log(n);
    if (n == 1) return;
    print(n - 1);
  }
  print(5);
}

////////////////////////////////////////////////////////////////////////////
//2) print 1 to n

function question2() {
  function print(n) {
    if (n == 0) return;
    print(n - 1);
    console.log(n);
  }
  print(5);
}

////////////////////////////////////////////////////////////////////////////////
//3) print both

function question3() {
  function print(n) {
    if (n == 0) return;
    console.log(n);
    print(n - 1);
    console.log(n);
  }
  print(5);
}

////////////////////////////////////////////////////////////////////////////
//4) find sum of numbers till n

function question4() {
  function findsum(n) {
    if (n == 1) return 1;
    return n + findsum(n - 1);
  }
  console.log(findsum(5));
}

//////////////////////////////////////////////////////////////////////////////
//5) Print factorial of a number

function question5() {
  function factorial(n) {
    if (n < 2) return n;
    return n * factorial(n - 1);
  }
  console.log(factorial(5));
}

////////////////////////////////////////////////////////////////////////////////
//6) Sum of digits

function question6() {
  function sumOfDigit(digit, start, end) {
    if (start == end - 1) return Number(digit[start]);
    return Number(digit[start]) + sumOfDigit(digit, start + 1, end);
  }
  let digit = '18675';
  console.log(sumOfDigit(digit, 0, digit.length));
}

/////////////////////////////////////////////////////////////////////////////
///7) Product of digits

function question7() {
  function prodDigit(n) {
    if (n == 0) return 1;
    return (n % 10) * prodDigit(Math.floor(n / 10));
  }
  console.log(prodDigit(12345));
}

/////////////////////////////////////////////////////////////////////////////////
//8) Reverse a number

function question8() {
  function printReverse(n) {
    if (n == 0) return;
    console.log(n % 10);
    reverse(Math.floor(n / 10));
  }

  function reverse(n) {
    function helper(n, rev) {
      if (n === 0) return rev;
      return helper(Math.floor(n / 10), rev * 10 + (n % 10));
    }
    return helper(n, 0);
  }

  console.log(reverse(1234));

  //   printReverse(12345);
}

//////////////////////////////////////////////////////////////////////
//9) Palindrome or not

function question9() {
  function palindrome(str) {
    function helper(str, s, e) {
      if (s > e) return true;

      if (str[s] !== str[e]) return false;

      return helper(str, ++s, --e);
    }
    return helper(str, 0, str.length - 1);
  }
  console.log(palindrome('malayalam'));
}

/////////////////////////////////////////////////////////////////////////////
////10) Count zero in number

function question10() {
  function countzero(n, c = 0) {
    if (n == 0) return c;
    if (n % 10 == 0) c++;
    return countzero(Math.floor(n / 10), c);
  }
  console.log(countzero(2306077));
}

////////////////////////////////////////////////////////////////////////////////
///11) Check if array sorted or not using reccursion

function question11() {
  function sorted(arr) {
    function helper(n) {
      if (n == arr.length - 1) return true;
      if (arr[n + 1] < arr[n]) return false;
      return helper(n + 1);
    }
    return helper(0);
  }

  console.log(sorted([1, 2, 4, 6, 8, 1]));
}

/////////////////////////////////////////////////////////////////
//12) Linear search with reccursion

function question12() {
  function search(arr, target, n) {
    if (n == arr.length) return -1;
    if (arr[n] === target) return n;
    return search(arr, target, n + 1);
  }
  console.log(search([1, 2, 3, 4, 5, 6], 6, 0));
}
question12();

//////////////////////////////////////////////////////////
///LEETCODE 17
const letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];
  function combination(index, combo) {
    if (combo.length == digits.length) {
      result.push(combo);
      return;
    }
    let chars = letters[digits[index]];
    for (const n of chars) {
      combination(index + 1, combo + n);
    }
  }

  combination(0, '');
  return result;
};

////////////////////////////////////////////////////////////////
/////LEETCODE 3211
const validStrings = function (n) {
  const output = [];
  function createBinary(r) {
    if (r.length == n) {
      output.push(r);
      return;
    }
    createBinary(r + '1');
    if (r.length == 0 || r[r.length - 1] !== '0') {
      createBinary(r + '0');
    }
  }
  createBinary('');
  return output;
};
