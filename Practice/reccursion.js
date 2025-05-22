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
question7();
/////////////////////////////////////////////////////////////////////////////////
//
