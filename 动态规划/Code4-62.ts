/**
 * 解题思路：首先寻找满足条件状态子集之间的关系
 * 和前一道题目相似：
 * 通用公式：dp[i][j]=dp[i-1][j]+grid[i][j-1]
 * 第一行与第一列单独处理
*/
function uniquePaths(m: number, n: number): number {
    if(m ===  1 || n === 1){
        return 1
    }
    const dp = new Map()
    for(let i=2;i<=m;i++){
        for(let j=2;j<=n;j++){
            dp.set(`${i}-${j}`,(dp.get(`${i-1}-${j}`) ?? 1)+(dp.get(`${i}-${j-1}`) ?? 1))
        }
    }
    return dp.get(`${m}-${n}`)
};
console.log("uniquePaths",uniquePaths(3,7))
console.log("uniquePaths",uniquePaths(3,7))
console.log("uniquePaths",uniquePaths(7,3))
console.log("uniquePaths",uniquePaths(3,3))




