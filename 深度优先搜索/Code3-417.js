/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点
 * 此题涉及到两个方向的搜索，太平洋到大西洋的方向和大西洋到太平洋的方向，因此需要两次深度遍历
 * 太平洋到大西洋的方向给一个标识a，大西洋到太平洋的方向根据标识a的方向确定目标元素
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/**
 * 第一种解题思路:使用递归
 * 时间复杂度为O(R∗C)，其中 R是给定网格中的行数，C是列数。
 * 空间复杂度为O(R∗C)，递归的深度最大可能是整个网格的大小。
 */
// ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   *
var pacificAtlantic = function(matrix) {
  const m = matrix.length,n= matrix[0].length;
  const moveDirection = [-1,0,1,0,-1],result=new Set(),visited = new Set(),_result = [];
  const def = (type,value,i,j)=>{
    if(type === 'pacific'){
      if(i === m-1 || j=== n-1){
        return true
      }
    }else{
      if((i === 0 || j=== 0) && result.has(`${i}-${j}`)){
        _result.push([i,j])
      }
    }
    visited.add(`${i}-${j}`);
    [1,2,3,4].forEach((v,index)=>{
      const row = i+moveDirection[index],column = j+moveDirection[index+1]
      if(matrix[row] === undefined ||matrix[row][column] === undefined || visited.has(`${row}-${column}`)){
        return
      }
      if(matrix[row][column]<=value){
        def(matrix[row][column],row,column)
      }
    })
    return false
  }
  //太平洋到大西洋
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(!visited.has(`${i}-${j}`)){
        if(def('pacific',matrix[i][j],i,j)){
          result.add(`${i}-${j}`)
        }
      }
    }
  }
  visited.clear()
  //大西洋到太平洋
  for(let i=m-1;i>=0;i--){
    for(let j=n-1;j>=0;j--){
      if(!visited.has(`${i}-${j}`)){
        def('Atlantic',matrix[i][j],i,j)
      }
    }
  }
  console.log("result",result)
  return _result
};
console.log('pacificAtlantic',pacificAtlantic([
    [1,2,2,3,5],
    [3,2,3,4,5],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
  ]));