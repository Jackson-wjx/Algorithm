/**
 * 题目： 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
 * 输入： nums: [8, 2, 6, 5, 4, 1, 3] ； target:7
 * 输出： [2, 5]
 */
// 时间复杂度O（n），空间复杂度O（n）
function twoNumAdd(nums) {
  const otherNumObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (otherNumObj.hasOwnProperty(nums[i])) {
      console.log([7 - nums[i], nums[i]]);
    } else {
      otherNumObj[7 - nums[i]] = true;
    }
  }
}
twoNumAdd([8, 2, 6, 5, 4, 1, 3]);