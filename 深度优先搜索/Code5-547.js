/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点
 */
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/**
 * 第一种解题思路:使用递归
 * 
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    let count = 0
    const def = (i,j)=>{
        if(isConnected[i] === undefined || isConnected[i][j] === undefined || isConnected[i][j] === 0){
            return
        }
        isConnected[i][j] = 0
        for(let r=0;r<n;r++){
            def(r,j)
        }
        for(let c=0;c<n;c++){
            def(i,c)
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            if(isConnected[i][j] === 1){
                count++
                def(i,j)
            }
        }
    }
    return count
};
console.log('findCircleNum',findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));
console.log('findCircleNum',findCircleNum([[1,0,0],[0,1,0],[0,0,1]]));
console.log('findCircleNum',findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]));