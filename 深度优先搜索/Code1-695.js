/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点，因此可以使用递归
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 第一种解题思路
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let ans = 0;
    const rowLength = grid.length,columnLength = grid[0].length
    const def = (row,column)=>{
        if(row<0||row>=rowLength||column<0||column>=columnLength||grid[row][column] === 0){
            return 0
        }
        let island = 1
        grid[row][column]=0
        island+=def(row-1,column)
        island+=def(row+1,column)
        island+=def(row,column-1)
        island+=def(row,column+1)
        return island
    };
    for(let row=0;row<rowLength;row++){
        for(let column =0;column<columnLength;column++){
            if(grid[row][column] ===1){
                ans=Math.max(ans,def(row,column))
            }
        }
    }
    return ans
};
// console.log("1111",maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]))
// console.log("1111",maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))