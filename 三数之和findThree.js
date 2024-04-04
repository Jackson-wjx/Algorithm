/** 
 * 题目： 给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合
 * 输入： nums: [5, 2, 1, 1, 3, 4, 6] ；target:8
 * 输出： [[1, 1, 6], [1, 2, 5], [1, 3, 4]]
 * 思路： 循环nums，从下标处截取数组交由两数之和处理，从而拼出三数。注意外层循环同一个数只计算一次，两数之和内一个数只找一次它的另一半。
 */
// 时间复杂度O（nlogn）
function twoNumAdd(nums, target) {
  const otherNumObj = {};
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (otherNumObj.hasOwnProperty(nums[i])) {
      if(otherNumObj[nums[i]] !== 1){
        arr.push([target - nums[i], nums[i]]);
        // 防止重复
        otherNumObj[nums[i]] = 1;
      }
    } else {
      otherNumObj[target - nums[i]] = 0;
    }
  }
  return arr;
}
function findThree(nums, target) {
  const resArr = []; 
  const hasCpt = {};
  for(let i = 0; i<nums.length; i++) {
    // console.log('i: ', nums[i]);
    // 防止重复
    if(hasCpt[nums[i]]) {
      continue;
    }
    const otherArr =  twoNumAdd(nums.slice(i+1), target - nums[i]);
    // console.log('otherArr: ', otherArr);
    if(otherArr.length>0) {
      otherArr.forEach(item => {
        resArr.push([nums[i], ...item])
      })
    }
    hasCpt[nums[i]] = true;
  }
  console.log(resArr);
}
findThree([5, 2, 1, 1, 3, 4, 6], 8);