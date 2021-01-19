/**
 * 解题思路
 * 判断两个区间是否重叠需要判断起始和结束的位置
 * 在判断之前先对区间进行排序，这样重叠的区间可能就是相邻的区间
 * 之后对相邻的区间进行判断，如果end[1] >= v[0]则存在重叠区间
 */
function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const childNumSum:number[] = Array(n),sum:number[]=[];
    let result:number = 0,index = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            childNumSum[index++] = sum;
        }
    }
    // const quickSort = (left:number,right:number) => {
    //     if(left>=right){
    //         return
    //     }
    //     let l = left, r = right;
    //     const standard = childNumSum[l];
    //     while(l<r){
    //         while(l<r && childNumSum[r] >=standard){
    //             r--
    //         }
    //         l<r && (childNumSum[l++] = childNumSum[r])
    //         while(l<r && childNumSum[l] <=standard){
    //             l++
    //         }
    //         l<r && (childNumSum[r--] = childNumSum[l])
    //     }
    //     childNumSum[l] = standard
    //     quickSort(left,l-1)
    //     quickSort(l+1,right)
    // }
    childNumSum.sort((a,b) => (a-b))
    // quickSort(0,childNumSum.length-1)
    sum.push(...childNumSum.slice(left-1,right))
    result = sum.reduce((acc,cur)=> acc + cur)
    return result%1000000007
};
console.log("rangeSum",rangeSum([1,2,3,4],4,1,5))
console.log("rangeSum",rangeSum([1,2,3,4],4,3,4))
console.log("rangeSum",rangeSum([1,2,3,4],4,1,10))
