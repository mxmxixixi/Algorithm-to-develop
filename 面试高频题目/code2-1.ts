/**
 * 1. 两数之和
 */
function twoSum(nums: number[], target: number): number[] {
  const _map = new Map();
  for(let i=0;i<nums.length;i++){
    const another = target-nums[i]
    if(_map.has(another)){
      return [_map.get(another),i]
    }else{
      _map.set(nums[i],i)
    }
  }
  return []
};
console.log("twoSum",twoSum([2,7,11,15],9))