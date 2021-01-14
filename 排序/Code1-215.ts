/**
 * 解题思路
 */
/**
 * 第一种解题思路
 * 
 */
function findKthLargest(nums: number[], k: number): number {
    const quickSort = (left:number,right:number) => {
        const standard = nums[left];
        while(left<right){
            if(nums[right]<standard){
                nums[left] = nums[right];
                left++
                if(nums[left]>standard){
                    nums[right] = nums[left];
                }else{
                    left++
                }
            }else{
                right--
            }
        }
        nums[left] = standard
    }
    quickSort(0,5);
    console.log("222",nums)
    return 1
};
console.log("findKthLargest",findKthLargest([3,2,1,5,6,4],2))
console.log("findKthLargest",findKthLargest([3,2,3,1,2,4,5,5,6],4))


