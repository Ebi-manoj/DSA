/////////////////////////////////////////////////////////////////////////
////////////////////////////BUBBLE SORT//////////////////////////////////
// ✅Time Complexity of Bubble Sort
// Case	Time Complexity
// Worst Case	O(n²)
// Average Case	O(n²)
// Best Case	O(n)

const nums = [1, 3, 6, 8, 2, 5, 4, 7];
function bubbleSort(nums) {
  const n = nums.length;
  let swapped = false;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 1; j < n - i; j++) {
      if (nums[j - 1] > nums[j]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        swapped = true;
      }
    }
    //if nothing swapped,means already sorted, then break the loop
    if (!swapped) break;
  }
  console.log(nums);
}
// bubbleSort(nums);

////////////////////////////////////////////////////////////////////////
/////////////////////SELECTION SORT////////////////////////////////////
// ✅Time Complexity of Selection Sort
// Case	Time Complexity
// Best Case	O(n²)
// Average Case	O(n²)
// Worst Case	O(n²)

function selectionSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j <= i; j++) {
      if (nums[j] > nums[maxIndex]) maxIndex = j;
    }
    [nums[maxIndex], nums[i]] = [nums[i], nums[maxIndex]];
  }
  console.log(nums);
}
// selectionSort(nums);

/////////////////////////////////////////////////////////////////////
////////////INSERTION SORT//////////////////////////////////////////
// ✅Time Complexity of Insertion Sort
// Case	Time Complexity
// Best Case	O(n)
// Average Case	O(n²)
// Worst Case	O(n²)
function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j - 1] < nums[j]) break;
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
    }
  }
  console.log(nums);
}
// insertionSort(nums);

///////////////////////////////////////////////////////////////////////////
////////////////////////////MERGE SORT///////////////////////////////////
// Time Complexity:
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n log n)

function mergeSortInPlace(arr, s, e) {
  if (e - s <= 1) return;

  let mid = Math.floor((s + e) / 2);

  mergeSortInPlace(arr, s, mid);
  mergeSortInPlace(arr, mid, e);

  mergeInPlace(arr, s, mid, e);
}

function mergeInPlace(arr, s, m, e) {
  let mix = [];

  let i = s;
  let j = m;
  let k = 0;

  while (i < m && j < e) {
    if (arr[i] < arr[j]) {
      mix[k++] = arr[i++];
    } else {
      mix[k++] = arr[j++];
    }
  }

  while (i < m) mix[k++] = arr[i++];
  while (j < e) mix[k++] = arr[j++];

  for (let l = 0; l < mix.length; l++) {
    arr[s + l] = mix[l];
  }
}

// mergeSortInPlace(nums, 0, nums.length);

////////////////////////////////////////////////////////////////
//////////////QUICK SORT///////////////////////////////////////
// ✅ Quick Sort — Time & Space Complexity
// Case	Time Complexity
// Best Case	O(n log n)
// Average Case	O(n log n)
// Worst Case	O(n²)

function sort(nums, low, high) {
  if (low >= high) {
    return;
  }
  let s = low;
  let e = high;
  let mid = Math.floor((s + e) / 2);
  let pivot = nums[mid];

  while (s <= e) {
    while (nums[s] < pivot) {
      s++;
    }
    while (nums[e] > pivot) {
      e--;
    }
    if (s <= e) {
      [nums[s], nums[e]] = [nums[e], nums[s]];
      s++;
      e--;
    }
  }
  sort(nums, low, e);
  sort(nums, s, high);
}
sort(nums, 0, nums.length - 1);
console.log(nums);
