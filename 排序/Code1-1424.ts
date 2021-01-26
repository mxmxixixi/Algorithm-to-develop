/**
 * 解题思路:使用快速排序对数组进行降序，之后用数组索引取到目标值
 */
function findDiagonalOrder(nums: number[][]): number[] {
    const row = nums.length;
    let maxCol = nums[0].length
    if(row === 1){
        return nums[0]
    }
    const result:number[] = []
    for(let i=0;i<row;i++){
        let _row = i,_col = 0
        maxCol = Math.max(maxCol,nums[_row].length)
        while(_row >=0 && _col < maxCol){
            nums[_row][_col] != undefined && result.push(nums[_row][_col])
            _row--;
            _col++;
        }
    }
    for(let j=1;j<maxCol;j++){
        let _row = row-1,_col = j
        while(_row >=0 && _col < maxCol){
            nums[_row][_col] != undefined && result.push(nums[_row][_col])
            _row--;
            _col++;
        }
    }
    return result
};
console.log("findDiagonalOrder",findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log("findDiagonalOrder",findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]))
console.log("findDiagonalOrder",findDiagonalOrder([[1,2,3],[4],[5,6,7],[8],[9,10,11]]))
console.log("findDiagonalOrder",findDiagonalOrder([[1,2,3,4,5,6]]))
console.log("findDiagonalOrder",findDiagonalOrder([[6],[8],[6,1,6,16]]))



