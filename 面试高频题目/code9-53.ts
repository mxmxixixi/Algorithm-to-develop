/**
 * 贪心算法：分别记录之前和、最大和两个变量
 *  之前和:如果之前和小于零，再加上当前值，只能使和变小，所以以零为边界,如果小于零，则舍弃之前累积的和,使用Math.max()直接比较值大小
 *  最大和：取最大和、之前和的最大值
 */
function maxSubArray(nums: number[]): number {
  let preSum = nums[0],maxSum=nums[0]
  for(let i=1;i<nums.length;i++){
    preSum = Math.max(nums[i],preSum + nums[i])
    maxSum = Math.max(maxSum,preSum)
  }
  return maxSum
};