/**
 * 题目： 输入一个字符串，打印出该字符串中，所有字符的排列组合
 * 输入： 'abc'
 * 输出： ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']
 * 思路： 固定前缀，递归计算后面的排列
 */
function permuteString(str) {
  const result = [];
  
  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      result.push(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        let newPrefix = prefix + remaining.charAt(i);
        let newRemaining = remaining.substring(0, i) + remaining.substring(i + 1);
        permute(newPrefix, newRemaining);
      }
    }
  }

  permute('', str);
  return result;
}

const inputString = 'abc';
const output = permuteString(inputString);
console.log(output);

/**
时间复杂度分析：
- 对于字符串长度为 n 的情况，该代码中进行了递归操作，每次递归都遍历了剩余字符，并执行了一些字符串操作（如 substring 和 charAt）。
  因此，每个字符都会生成一个分支，导致时间复杂度一般是阶乘级别的。
- 递归的层数与输入字符串长度相关，因此时间复杂度可以表示为 O(n!)，其中 n 是输入字符串的长度。

空间复杂度分析：
- 空间复杂度取决于递归调用的深度，因为在每个递归层级上，都会生成一个新的字符串，并存储在结果数组中。
  因此，空间复杂度也是 O(n!)，其中 n 是输入字符串的长度。

因此，这个解法的时间复杂度与空间复杂度都是阶乘级别的，对大型输入可能会导致性能问题。  
 */