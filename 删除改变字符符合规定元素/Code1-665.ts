/**
 * 
 */
function checkPossibility(nums: number[]): boolean {
    const _checkPossibility = ()=>{
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                return false
            }
        }
        return true
    }
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            let temp = nums[i]
            nums[i]=nums[i+1]
            if(_checkPossibility()){
                return true
            }
            nums[i] = temp
            nums[i+1] = temp
            return _checkPossibility()
        }
    }
    return true
};
console.log("checkPossibility",checkPossibility([4,2,3]))
console.log("checkPossibility",checkPossibility([4,2,1]))
console.log("checkPossibility",checkPossibility([4]))
console.log("checkPossibility",checkPossibility([3,4,2,3]))

