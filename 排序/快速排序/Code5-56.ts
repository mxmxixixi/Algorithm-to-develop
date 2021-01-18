/**
 * 解题思路
 * 判断两个区间是否重叠需要判断起始和结束的位置
 * 在判断之前先对区间进行排序，这样重叠的区间可能就是相邻的区间
 * 之后对相邻的区间进行判断，如果end[1] >= v[0]则存在重叠区间
 */
function merge(intervals: number[][]): number[][] {
    if(intervals.length <=1){
        return intervals
    }
    const result:number[][] = []
    const quickSort = (left:number,right:number) => {
        if(left>=right){
            return
        }
        let l = left,r = right;
        const standard = intervals[l]
        while(l<r){
            while(l<r && intervals[r][0] >= standard[0]){
                r--
            }
            l < r && (intervals[l++] = intervals[r])
            while(l<r && intervals[l][0] <= standard[0]){
                l++
            }
            l < r && (intervals[r--] = intervals[l])
        }
        intervals[l] = standard
        quickSort(left,l-1)
        quickSort(l+1,right)
    }
    quickSort(0,intervals.length-1)
    result.push(intervals[0])
    intervals.forEach((v,index)=>{
        if(index != 0){
            const end:number[] = result.pop() || []
            if(end[1] >= v[0]){
                result.push([end[0],Math.max(v[1],end[1])])
            }else{
                result.push(end)
                result.push(v)
            }
        }
    })
    return result
}
console.log("merge",merge([[8,10],[2,6],[1,3],[15,18]]))
console.log("merge",merge([[4,5],[1,4]]))
console.log("merge",merge([[1,10],[2,5],[11,23]]))
