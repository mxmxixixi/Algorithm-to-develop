/**
 * @param {number[]} nums
 * @return {number}
 */
<font color="red">第一次解题思路:</font>
/**
 * 时间复杂度在O(logN)的限制下，就说明不能直接对数组进行循环
 * 可以使用二分法，再到中间值和左右两面的值就行比较，如果都不等，则说明找到该元素，否则，就要判断此元素到底在哪个区域
 * 判断区域的条件是：如果有一个区域剩余元素的个数是奇数个，那说明寻找的元素在此区域内，因为每个元素都是成双出现，不可能落单，落单就说明是要寻找的元素
 * 时间复杂度o(logN),空间复杂度o(1)
 */
var singleNonDuplicate = function(nums) {
    let left =0,right = nums.length-1
    while(left<right){
        let mid = left+Math.floor((right-left)/2)
        if(nums[mid]!== nums[mid-1] && nums[mid]!== nums[mid+1]){
            return nums[mid]
        }
        if(nums[mid]=== nums[mid-1]){
            if((right-mid)%2 === 0){
                right=mid-2
            }else{
                left = mid+1
            }     
        }else if(nums[mid]=== nums[mid+1]){       
            if((right-mid+1)%2 === 0){
                right=mid-1
            }else{
                left = mid+2
            }  
        }
    }
    return nums[left]
}