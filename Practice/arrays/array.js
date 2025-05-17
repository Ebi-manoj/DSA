////////////////////////////////////////////////////////////
// 1) Rotate array  by kth time

function rotateKthTime() {
  const nums = [1, 2, 3, 4, 5, 6, 7];

  function rotate(nums, k) {
    const size = nums.length;
    if (size < k) {
      k = k % size;
    }
    reverse(nums, 0, size - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, size - 1);
    return nums;
  }
  console.log(rotate(nums, 3));
  function reverse(nums, left, right) {
    let temp = 0;
    while (left < right) {
      temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
}

///////////////////////////////////////////////////////////////////////
// 2) Remove Duplicates from the array,no new array

//using built-in methods
function removeDuplicates() {
  const nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 6];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  console.log(nums);
}
// removeDuplicates();

// without built-in methods
function removeDuplicates() {
  const nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 6];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      index++;
      nums[index] = nums[i];
    }
  }
  console.log(nums);
}
// removeDuplicates()

///////////////////////////////////////////////////////////////////////////////////
// Kadane's algorithm
// 3) find maxSum of Subarray
function findMaxSubArray(nums) {
  let sum = 0;
  let maxSum = nums[0];
  let sI;
  let lI;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 0) {
      sum = 0;
      sI = i + 1;
    }
    if (sum > maxSum) {
      maxSum = sum;
      lI = i;
    }
  }
  return {
    maxSum,
    subarray: nums.slice(sI, lI + 1),
  };
}

// console.log(findMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
