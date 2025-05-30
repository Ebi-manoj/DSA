/////////////////////////////////////////////////////////////////////
/////BUBBLE SORT
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
bubbleSort(nums);
