/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点，因此可以使用递归
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * 第一种解题思路:使用递归
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
var numIslands = function(grid) {
    const m = grid.length,n=grid[0].length
    let landsNum = 0;
    const moveDirection = Array.of(-1,0,1,0,-1)
    const def = (i,j)=>{
        if(grid[i] === undefined || grid[i][j] === undefined||grid[i][j] === '0'){
            return
        }
        grid[i][j] ='0';
        [1,2,3,4].forEach((v,index)=>{
            def(i+moveDirection[index],j+moveDirection[index+1])
        })
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] ==='1'){
                landsNum++
                def(i,j)
            }
        }
    }
    return landsNum
};
/**
 * 第二种解题思路:使用栈结构
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
var numIslands = function(grid) {
    const m = grid.length,n=grid[0].length
    let landsNum = 0;
    const moveDirection = Array.of(-1,0,1,0,-1);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] ==='1'){
                landsNum++
                const stack = [[i,j]]
                while(stack.length){
                    const [row,column] = stack.pop();
                    [1,2,3,4].forEach((v,index)=>{
                        const _row = row+moveDirection[index],_column = column+moveDirection[index+1]
                        if(grid[_row] === undefined || grid[_row][_column] === undefined||grid[_row][_column] === '0'){
                            return
                        }
                        grid[_row][_column] ='0';
                        stack.push([_row,_column])
                    })
                }
            }
        }
    }
    return landsNum
};
console.log('numIslands',numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));
  console.log('numIslands',numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]));