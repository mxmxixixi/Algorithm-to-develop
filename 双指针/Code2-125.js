
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 第一次解题思路:
 * 回文字符串就是从前到后与从后到前的字符串相同，不区分大小写 
 * 时间复杂度o(2n),空间复杂度o(1)
 */
var isPalindrome = function(s) {
    let replaceString = s.replace(/[^a-yA-Y0-9]/g,'')
    return replaceString.split('').reverse().join('').toUpperCase() === replaceString.toUpperCase()
};
/**
 * 第二次解题思路:
 * 以上使用的是字符串的api实现了字符串反转进行比较
 * 使用双指针就可以替换api，回文就是中间对称
 * 时间复杂度o(n/2),空间复杂度o(1)
 */
var isPalindrome = function(s) {
    let replaceString = s.replace(/[^a-yA-Y0-9]/g,'').toUpperCase()
    let i=0,j=replaceString.length-1
    while(i<=j){
      if(replaceString[i] === replaceString[j]){
        i++;j--
      }else{
        return false
      }
    }
    return true
};
