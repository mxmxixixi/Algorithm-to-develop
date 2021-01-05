/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/**
 * 第一种解题思路:使用递归
 * 此题涉及到两个方向的搜索，可以流入太平洋的点、可以流入大西洋的点、因此需要两次深度遍历，两次遍历的交集就是符合题目要求的点
 * 其实是四次遍历，寻找流入太平洋的点两次遍历，寻找流入大西洋的点两次遍历
 * 可以流入太平洋的点就使用(0,*),(*,0)的点作为起点，找寻value值>=的点就一定可以流入太平洋，大西洋同理
 * 使用visited表示已经访问过的点，寻找流入太平洋的点后进行清空，result表示可以流入太平洋的点，使用Set结构直接去重
 * _result存储可以符合条件的点
 * 时间复杂度为O(4*R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
var pacificAtlantic = function(matrix) {
  const m = matrix.length,n= (matrix[0]||[]).length;
    if(m === 0||n===0){
        return []
    }
    const moveDirection = [-1,0,1,0,-1],result=new Set(),visited = new Set(),_result = [];
    const def = (type,value,i,j)=>{
        if(type === 'pacific'){
        result.add(`${i}-${j}`)
        }else{
            if(result.has(`${i}-${j}`)){
                result.delete(`${i}-${j}`)
                _result.push([i,j])
            }
        }
        visited.add(`${i}-${j}`);
        [1,2,3,4].forEach((v,index)=>{
        const row = i+moveDirection[index],column = j+moveDirection[index+1]
        if(matrix[row] === undefined ||matrix[row][column] === undefined || visited.has(`${row}-${column}`)){
            return
        }
        if(matrix[row][column]>=value){
            def(type,matrix[row][column],row,column)
        }
        })
        return false
    }
    //可以流入太平洋的点
    for(let i=0;i<m;i++){
        def('pacific',matrix[i][0],i,0)
    }
    for(let j=0;j<n;j++){
        def('pacific',matrix[0][j],0,j)
    }
    visited.clear()
    //可以流入大西洋的点
    for(let i=m-1;i>=0;i--){
        def('Atlantic',matrix[i][n-1],i,n-1)
    }
    for(let j=n-1;j>=0;j--){
        def('Atlantic',matrix[m-1][j],m-1,j)
    }
    return _result
};
console.log('pacificAtlantic',pacificAtlantic([
    [1,2,2,3,5],
    [3,2,3,4,5],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
  ]));