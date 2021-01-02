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
 * 第一种解题思路:使用递归
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
var maxAreaOfIsland = function(grid) {
    let area = 0;count =0
    const rowLength = grid.length,columnLength = grid[0].length
    const moveDirection = Array.of(-1, 0, 1, 0, -1)
    const def = (row,column)=>{
        if(row<0||row>=rowLength||column<0||column>=columnLength||grid[row][column] === 0){
            return 0
        }
        count++
        grid[row][column]=0;
        [1,2,3,4].forEach((v,index)=>{
            def(row+moveDirection[index],column+moveDirection[index+1])
        })
    };
    for(let row=0;row<rowLength;row++){
        for(let column =0;column<columnLength;column++){
            if(grid[row][column] ===1){
                count=0
                def(row,column)
                area=Math.max(area,count)
            }
        }
    }
    return area
};
/**
 * 第二种解题思路:使用栈结构
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
var maxAreaOfIsland = function(grid) {
    let area = 0;
    const rowLength = grid.length,columnLength = grid[0].length
    const moveDirection = Array.of(-1, 0, 1, 0, -1)
    for(let row=0;row<rowLength;row++){
        for(let column =0;column<columnLength;column++){
            if(grid[row][column] ===1){
                const stack = [[row,column]]
                let count = 0
                while(stack.length>0){
                    const node = stack.pop()
                    const [node_row,node_column] = node
                    if(node_row<0||node_row>=rowLength||node_column<0||node_column>=columnLength||grid[node_row][node_column] === 0){
                        continue
                    }
                    count++
                    grid[node_row][node_column] = 0;
                    [1,2,3,4].forEach((v,index)=>{
                        const _row = node_row+moveDirection[index],_column=node_column+moveDirection[index+1]
                        stack.push([_row,_column])
                    })
                }
                area = Math.max(area,count)
            }
        }
    }
    return area
};
console.log("1111",maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))
console.log("1111",maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))