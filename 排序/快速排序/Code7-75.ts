/**
 * 根据题目要求原地算法，也就是空间复杂度为常数级别
 * 此题和快速排序的一趟扫描极为相似，因此可以按照这个思想去写代码
 * 利用双指针完成一趟扫描算法
 * 假如value为2则从right侧开始交换值，value为0时则从left侧开始交换值
*/
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): number[] {
    const numLength:number = nums.length 
    if(numLength === 1){
        return nums
    }
    let left = 0, right = numLength-1;
    for (let i = 0; i <= right; ++i) {
        while (i <= right && nums[i] == 2) {
            let temp = nums[i];
            nums[i] = nums[right];
            nums[right--] = temp;
        }
        if (nums[i] == 0) {
            let temp = nums[i];
            nums[i] = nums[left];
            nums[left++] = temp;
        }
    }
    return nums
};