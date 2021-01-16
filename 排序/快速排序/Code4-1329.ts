/**
 * 解题思路
 * 首先确定对角线的条数，可以通过每一行循环此时是第一列，和每一列循环此时是第一行，这样找到对角线的元素
 * 找到对角线元素后存储行列，对行列对应的值进行快排
 */
function diagonalSort(mat: number[][]): number[][] {
    const m = mat.length,n = (mat[0]||[]).length,arr:Array<number[]> = []
    if(m===0||m===1||n===0){
        return mat
    }
    const quickSort = (left:number,right:number)=>{
        if(left>=right){
            return
        }
        let l = left,r = right;
        const standard = mat[arr[l][0]][arr[l][1]];
        while(l<r){
            while(l<r && mat[arr[r][0]][arr[r][1]] >= standard){
                r--
            }
            if(l<r){
                mat[arr[l][0]][arr[l][1]] = mat[arr[r][0]][arr[r][1]]
            }
            while(l<r && mat[arr[l][0]][arr[l][1]] <= standard){
                l++
            }
            if(l<r){
                mat[arr[r][0]][arr[r][1]] = mat[arr[l][0]][arr[l][1]]
            }
        }
        mat[arr[l][0]][arr[l][1]] = standard
        quickSort(left,l-1)
        quickSort(l+1,right)
    }
    for(let r=0;r<m;r++){
        arr.length = 0
        let _r = r,_c = 0
        while(_r<m && _c<n){
            arr.push([_r,_c])
            _r++
            _c++
        }
        quickSort(0,arr.length-1)
    }
    for(let c=1;c<n;c++){
        arr.length = 0
        let _r = 0,_c = c
        while(_r<m && _c<n){
            arr.push([_r,_c])
            _r++
            _c++
        }
        quickSort(0,arr.length-1)
    }
    return mat
};
console.log("diagonalSort",diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]))
console.log("diagonalSort",diagonalSort([[1,3,3],[5,6,1]]))
console.log("diagonalSort",diagonalSort([]))