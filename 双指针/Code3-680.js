/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 第一次解题思路:
 * 这个思路是找到不相同的字符则进行前后对应的字符比对
 * 其实这个思路是不对的，这样只是判断了s[i+1]===s[j]或s[i]===s[j-1]的情况，所以是不对的，还有两种情况都相等的时候
 * 时间复杂度o(n/2),空间复杂度o(1)
 */
var validPalindrome = function(s) {
    let i=0,j=s.length-1,first=0
    while(i<=j){
      if(s[i] === s[j]){
        i++;j--
      }else if(s[i+1]===s[j]){
          i+=2;j--
          first++
      }else if(s[i]===s[j-1]){
          i++;j-=2
          first++
      }else{
        return false
      }
    }
    if(first <=1){
      return true
    }else{
      return false
    }
};
/**
 * 第二次解题思路[看题解后]:
 * 重新整理后，题目中**最多删除一个字符**，我们可以碰到不相同的字符串后对剩余的字符串进行回文字符串检查
 * 回文字符串检查时分为从左边删除一个字符和从右边删除一个字符
 * 时间复杂度o(n),空间复杂度o(n)
*/
function isPali(str, l, r) {
    while (l < r) {
        if(str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j ) {
        if(s[i] !== s[j]) {
            return isPali(s, i + 1, j ) || isPali(s, i, j - 1);
        }
        i++;
        j--;
    }
    return true;
};
