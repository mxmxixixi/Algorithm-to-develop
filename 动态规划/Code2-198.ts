/**
 * 解题思路：首先寻找满足条件状态子集之间的关系
 * 房屋金额[4,5,6,8]
 * 第一间房屋：sum0 = H0 = 4
 * 前两间房屋：sum1 = max(H0,H1)  = 5//两间房屋选择金额大的房屋偷
 * 前三间房屋：sum2 = max(sum0+H2,sum1)//可以有两种情况进行偷盗：1.第三间房屋偷，其余两间只能偷第一间，也就是sum1+H2，2.第三件房屋不偷，在第一二间金额比较大的偷也就是sum2
 * 前四间房屋：sum3 = max(sum1+H3,sum2)//论证和前三间房屋一致
 * 通用公式：sum(n) = max(sum(n-2)+H(n),sum(n-1))
*/
function rob(nums: number[]): number {
    const houseNumber = nums.length
    //前两个间房屋直接判断最大值返回
    if(houseNumber <= 2 ){
        return Math.max(...nums,0)
    }
    //根据公式的状态，最后结果只与前两个状态有关，因此在重叠子问题上动态表格只存储前两个状态就好
    let sum = 0,pre = nums[0],current = Math.max(nums[0],nums[1])
    for(let i=2;i<houseNumber;i++){
        sum = Math.max(pre+nums[i],current)
        pre = current
        current = sum
    }
    return sum
};
console.log("rob1",rob([]))
console.log("rob2",rob([5,10]))
console.log("rob3",rob([1,89,3]))
console.log("rob4",rob([4,5,6,8]))
console.log("rob5",rob([1,89,3,34,56]))
console.log("rob6",rob([1,89,3,34,56,89]))
console.log("rob7",rob([1,89,3,34,56,89,12]))




