function getKthMagicNumber(k: number): number {
  let dp = [1]
  let p3 = 0
  let p5 = 0
  let p7 = 0
  for(let i = 1; i < k;i ++) {
      dp[i] = Math.min(dp[p3]*3, dp[p5] * 5, dp[p7] * 7)
      dp[i] == dp[p3] * 3 && p3++ 
      dp[i] == dp[p5] * 5 && p5++
      dp[i] == dp[p7] * 7 && p7++
  }
  return dp[k-1]
};
