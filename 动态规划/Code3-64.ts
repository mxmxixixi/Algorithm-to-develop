/**
 * 解题思路：首先寻找满足条件状态子集之间的关系
 * 要想最后的路径之和最小，那要保证到达最后一步的前一步的路径之和最小
 * 到达最后一个节点有两种选择，从左边到达，从上边到达，因此应当选择，这两种路径中和较小的一条
 * dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]，整体公式如下
 * 当i=0,j>0:dp[0][j]=dp[0][j−1]+grid[0][j]
 * 当i>0,j=0:dp[i][0]=dp[i-1][0]+grid[i][0]
 * 当i>0,j>0:dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
*/
/**function minPathSum(grid: number[][]): number {
  const m = grid.length,n = (grid[0] ?? []).length
  if(m ===1 && n===1){
    return grid[0][0]
  }
  const dp:Array<Array<number>> = grid
  for(let col=1;col<n;col++){
    dp[0][col]=dp[0][col-1]+grid[0][col]
  }
  for(let row=1;row<m;row++){
    dp[row][0]=dp[row-1][0]+grid[row][0]
  }
  for(let row=1;row<m;row++){
    for(let col=1;col<n;col++){
      dp[row][col] = Math.min(dp[row-1][col],dp[row][col-1])+grid[row][col]
    }
  }
  return dp[m-1][n-1]
};*/
/**
 * 此种方法使用Map结构存储数据dp
 */
function minPathSum(grid: number[][]): number {
  const m = grid.length,n = (grid[0] ?? []).length
  if(m ===1 && n===1){
    return grid[0][0]
  }
  const dp = new Map()
  dp.set('0-0',grid[0][0])
  for(let col=1;col<n;col++){
    dp.set(`0-${col}`,dp.get(`0-${col-1}`)+grid[0][col])
  }
  for(let row=1;row<m;row++){
    dp.set(`${row}-0`,dp.get(`${row-1}-0`)+grid[row][0])
  }
  for(let row=1;row<m;row++){
    for(let col=1;col<n;col++){
      dp.set(`${row}-${col}`,Math.min(dp.get(`${row-1}-${col}`),dp.get(`${row}-${col-1}`))+grid[row][col])
    }
  }
  return dp.get(`${m-1}-${n-1}`)
};
console.log("minPathSum",minPathSum([[1]]))
console.log("minPathSum",minPathSum([[1,2],[3,4]]))
console.log("minPathSum",minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
console.log("minPathSum",minPathSum([[1,2,3],[4,5,6]]))
