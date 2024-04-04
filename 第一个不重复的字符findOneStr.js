/**
 * 题目： 输入一个字符串，找到第一个不重复字符的下标
 * 输入： 'abcabcde'
 * 输出： 6
 */
function findOneStr(str) {
  let chatMap = {};
  let flag = 0;
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if(!chatMap[element] && flag === 0) {
      chatMap[element] = 1;
    }
    else if(chatMap[element]) {
      flag = 1;
      chatMap[element] -= 1;
    }
    else if(!chatMap[element] && flag) {
      return index;
    }
  }
}
console.log(findOneStr('abcabcde'));
console.log(findOneStr('abcaebcde'));

// 时间复杂度O(n)、 空间复杂度O(n)
function findOneStr1(str) {
  if (!str) return -1;
  // 使用map存储每个字符出现的次数
  let map = {};
  let arr = str.split("");
  arr.forEach(item => {
    let val = map[item];
    // val为undefined时，表示未存储，map[item] = 1；否则map[item] = val + 1
    map[item] = val ? val + 1 : 1;
  });
  // 再遍历一遍找到出现1次的下标
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] == 1) {
      return i;
    }
  }
  return -1;
}

console.log(findOneStr1('abcadebcde'));