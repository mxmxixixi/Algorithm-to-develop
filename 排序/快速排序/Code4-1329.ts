/**
 * 解题思路:此题目需要排序，但是排序的内容是需要动态生成的，所以可以在生成的过程中进行排序；
 * 这样就符合插入排序的思想，一个已经排序的数组，插入一个数据放在哪个位置；
 * 此题使用了直接插入排序，且符合时间复杂度是最优的情况
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