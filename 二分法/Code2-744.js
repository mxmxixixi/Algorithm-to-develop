
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/**
 * 第一次解题思路:
 * 已经有顺序的数组中找到比目标字母大的最小字母，
 * 首先先找到比目标字母大的字母，所以可以使用二分法
 * 首先判断排序字符是升序还是降序，通过升序与降序左右指针的移动不同
 * 时间复杂度o(logN),空间复杂度o(1)
 */
var nextGreatestLetter = function(letters, target) {
    let sort =''
    if(letters[0]>letters[1]){
        sort = 'desc'
    }else{
        sort = 'asc'
    }
    let left=0,right=letters.length-1,ans=''
    while(left<=right){
        let avg =  Math.floor(left+(right-left)/2)
        if(target<letters[avg]){
            ans=letters[avg]
            if(sort === 'asc'){
                right=avg-1
            }else{
                left=avg+1
            }
        }else{
            if(sort === 'asc'){
                left=avg+1
            }else{
                right=avg-1
            }
            
        }
    }
    return ans ? ans:letters[0]
};
/**
 * 第二次解题思路[看题解后]
 * 这个题还有一个规律就是当给的目标字段不在letters的字符所包含的范围内，那就取第一个值，这种运算可以用模
 * 时间复杂度o(logN),空间复杂度o(1)
 */
var nextGreatestLetter = function(letters, target) {
    let sort =''
    if(letters[0]>letters[1]){
        sort = 'desc'
    }else{
        sort = 'asc'
    }
    let left=0,right=letters.length-1
    while(left<=right){
        let avg =  Math.floor(left+(right-left)/2)
        if(target<letters[avg]){
            if(sort === 'asc'){
                right=avg-1
            }else{
                left=avg+1
            }
            
        }else{
            if(sort === 'asc'){
                left=avg+1
            }else{
                right=avg-1
            }
            
        }
    }
    return letters[left%letters.length]
};