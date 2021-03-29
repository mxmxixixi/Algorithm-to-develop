/**
 * 
 * 使用动态规划思想
 * 首先回文子字符串就是对称的一个结构，在第一个元素与最后一个元素相等的情况下，
 * 此字符串是否是回文取决于dp[i+1][j-1]是不是回文
 * 寻找状态转移方程：dp[i][j] = s[i] === s[j] && dp[i+1][j-1]  j-i>=3   i,j代表字符串的首尾坐标
 * 由于dp[i][j]想象成二位数组，它依赖的点是在左下方，所以先升序填写前一列，再升序填写行
 */
function longestPalindrome(s: string): string {
  const  len = s.length
  if( len < 2 ){
    return s
  }
  const dp = new Array(len).fill([])
  let maxLen = 1,start = 0
  //矩阵中表格对角线为true
  for(let i=0;i<len;i++){
    dp[i][i] = true
  }
  //先填充列，再填充行
  for(let j=1;j<len;j++){
    for(let i=0;i<j;i++){
      if(s[i] !== s[j]){
        dp[i][j] = false
      }else{
        if(j-i>3){
          dp[i][j] = dp[i+1][j-1]
        }else{
          dp[i][j] = true
        }
      }
      if(dp[i][j] && j-i+1> maxLen ){
        maxLen = j-i+1
        start = i
      }
    }
  }
  return s.substring(start,start + maxLen)
};