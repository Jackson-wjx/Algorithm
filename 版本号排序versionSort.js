/**
 * 题目： 输入一组版本号，输出从大到小的排序
 * 输入： ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
 * 输出： ['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']
 */
function versionSort(nums) {
  let arr = nums.map((item) => item.split('.'));
  arr.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else if (b[2] !== a[2]) {
      return b[2] - a[2]; 
    } else if (!b[3]) {
      return -1;
    } else if (!a[3]) {
      return 1;
    } else if (b[3] !== a[3]) {
      return b[3] - a[3];
    }
  });
  arr = arr.map((item) => item.join('.'));
  console.log(arr);
}
versionSort([
  '2.1.0.1',
  '2.6.4',
  '0.402.1',
  '2.6.0.1',
  '2.6.4.1',
  '2.6.4.6',
  '10.2.1',
  '5.1.2',
  '1.0.4.5',
]);

function versionSort2(arr) {
  arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split(".");
    const arr2 = b.split(".");
    while (true) {
      // 取出相同位置的数字
      const s1 = arr1[i];
      const s2 = arr2[i];
      i++;
      // 若s1 或 s2 不存在，说明相同的位置已比较完成，接下来比较arr1 与 arr2的长度，长的版本号大
      if (s1 === undefined || s2 === undefined) {
        return arr2.length - arr1.length;
      }
      if (s1 === s2) continue;
      // 比较相同位置的数字大小
      return s2 - s1;
    }
  });
  console.log(arr);
}
versionSort2([
  '2.1.0.1',
  '2.6.4',
  '0.402.1',
  '2.6.0.1',
  '2.6.4.1',
  '2.6.4.6',
  '10.2.1',
  '5.1.2',
  '1.0.4.5',
]);