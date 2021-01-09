/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点;
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
/**
 * 第一种解题思路:使用递归
 * 注意点：第二条规则:如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
 * 后面进行递归的条件是E相邻没有炸弹，不能再第一个adjacent循环中最直接进行递归 ，因为此时还不能判断此点周围是否有炸弹
 */
var updateBoard = function(board, click) {
    const adjacent=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const visited = new Set()
    const def = ([i,j])=>{
        visited.add(`${i}-${j}`)
        if(board[i][j] === 'E'){
            let minesNum = 0;
            adjacent.forEach(([r,c])=>{
                const _r = r+i,_c = c+j
                if(board[_r] != undefined && board[_r][_c] != undefined && !visited.has(`${_r}-${_c}`)){
                    if(board[_r][_c] === 'M'){
                        minesNum++
                    }
                }
            })
            if(minesNum > 0){
                board[i][j] = `${minesNum}`
            }else{
                board[i][j] = 'B'
                adjacent.forEach(([r,c])=>{
                    const _r = r+i,_c = c+j
                    if(board[_r] != undefined && board[_r][_c] != undefined && !visited.has(`${_r}-${_c}`)){
                        if(board[_r][_c] === 'E'){
                            def([_r,_c])
                        }
                    }
                })
            }
        }
    }
    const [i,j] =click
    if(board[i][j] === 'M'){
        board[i][j] = 'X'
    }else{
        def(click)
    }
    return board
};
console.log('updateBoard',updateBoard([['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'E', 'E', 'E']],[3,0]));
console.log("222",[['B', '1', 'E', '1', 'B'],
['B', '1', 'M', '1', 'B'],
['B', '1', '1', '1', 'B'],
['B', 'B', 'B', 'B', 'B']])
console.log('updateBoard',updateBoard([['B', '1', 'E', '1', 'B'],
['B', '1', 'M', '1', 'B'],
['B', '1', '1', '1', 'B'],
['B', 'B', 'B', 'B', 'B']],[1,2]));
console.log("3434",[['B', '1', 'E', '1', 'B'],
['B', '1', 'X', '1', 'B'],
['B', '1', '1', '1', 'B'],
['B', 'B', 'B', 'B', 'B']])