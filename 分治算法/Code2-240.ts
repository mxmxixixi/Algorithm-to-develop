/**
 * 从左下角开始寻找，判断此元素是否可能在当前行，
 * 判断target是否在这行的首尾元素值之间，如果符合，则元素可能在这一行中
 * 如果寻找到直接返回true，否则去前一行寻找，循环到所有行都已判断过，则退出循环
 * 
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length,n = matrix[0].length;
    let i=m-1;
    while(i>=0){
        if(matrix[i][0]<target && matrix[i][n-1]>target){
            for(let j=1;j<n;j++){
                if(matrix[i][j] === target){
                    return true
                }
            }
            i--
        }else if(matrix[i][0]===target || matrix[i][n-1]===target){
            return true
        }else{
            i--
        }
    }
    return false
};
console.log("searchMatrix",searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5))
console.log("searchMatrix",searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20))


