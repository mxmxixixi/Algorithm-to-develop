/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * 第一种解题思路:使用递归
 */
var solve = function(board) {
    const m = board.length,n=(board[0]||[]).length
    if(m===0 || n === 0){
        return board
    }
    const visited = new Set(),moveDirection = Array.of(-1, 0, 1, 0, -1)
    let area = [];
    const def = (i,j)=>{
        if(board[i] === undefined || board[i][j] === undefined || visited.has(`${i}-${j}` || board[i][j] === 'X')){
            return
        }
        board[i][j] = 'M'
        visited.add(`${i}-${j}`);
        [1,2,3,4].forEach((v,index)=>{
            const r = i+moveDirection[index],c = j+moveDirection[index+1]
            def(r,c)
        })
    }
    for(let i=0;i<m;i++){
        def(i,0)
        def(i,n-1)
    }
    for(let j=0;j<n;j++){
        def(0,j)
        def(m-1,j)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'M') {
                board[i][j] = 'O';
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
    return board
};
console.log('solve',solve([['X', 'X', 'X','X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']]));
console.log('solve',solve([["O","O","O"],["O","O","O"],["O","O","O"]]));
    