/**
 * 解题思路:使用快速排序对数组进行排序
 */
function sortArray(nums: number[]): number[] {
    const quickSort = (left:number,right:number)=>{
        if(left>=right){
            return
        }
        let l = left,r = right;
        const standard = nums[l];
        while(l<r){
            while(l<r && nums[r]>=standard){
                r--
            }
            l<r && (nums[l++] = nums[r])
            while(l<r && nums[l]<=standard){
                l++
            }
            l<r && (nums[r--] = nums[l])
        }
        nums[l] = standard 
        quickSort(left,l-1)
        quickSort(l+1,right)
    }
    quickSort(0,nums.length-1)
    return nums
};
console.log("sortArray",sortArray([5,2,3,1]))
console.log("sortArray",sortArray([5,1,1,2,0,0]))



