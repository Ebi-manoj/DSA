//////////////////////////////////////////////////////////////////////////
//1) Print n to 1

function printReverse() {
  function print(n) {
    console.log(n);
    if (n == 1) return;
    print(n - 1);
  }
  print(5);
}

////////////////////////////////////////////////////////////////////////////
//2) print 1 to n

function printOrder() {
  function print(n) {
    if (n == 0) return;
    print(n - 1);
    console.log(n);
  }
  print(5);
}

////////////////////////////////////////////////////////////////////////////////
//3) print both

function printBoth() {
  function print(n) {
    if (n == 0) return;
    console.log(n);
    print(n - 1);
    console.log(n);
  }
  print(5);
}
printBoth();
