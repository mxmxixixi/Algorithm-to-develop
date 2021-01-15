/**
 * 解题思路:使用快速排序对数组进行降序，之后用数组索引取到目标值
 */
function findKthLargest(nums: number[], k: number): number {
    const quickSort = (_left:number,_right:number) => {
        if(_left>=_right){
            return
        }
        let left = _left,right = _right
        const standard = nums[left];
        while(left<right){
            while(left<right && nums[right]<=standard){
                right--
            }
            if(left<right){
                nums[left++] = nums[right]
            }
            while(left<right && nums[left]>=standard){
                left++
            }
            if(left<right){
                nums[right--] = nums[left]
            }
        }
        nums[left] = standard;
        quickSort(_left,left-1);
        quickSort(left+1,_right);
    }
    quickSort(0,nums.length-1)
    return nums[k-1]
};
console.log("findKthLargest",findKthLargest([3,2,1,5,6,4],2))
console.log("findKthLargest",findKthLargest([3,2,3,1,2,4,5,5,6],4))
console.log("findKthLargest",findKthLargest([45,2,23,1,20,4,98,5,100],4))



