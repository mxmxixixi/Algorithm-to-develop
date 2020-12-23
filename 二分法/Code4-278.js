/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
/**
 * 第一次解题思路
 * 减少对api的使用次数，那就是说明时间复杂度低一些
 * 可以使用二分法判断错误版本出现的范围
 * 如果mid是错误版本，那就说明错误版本一定是它或者在它之前，所有right=mid
 * 时间复杂度o(logN),空间复杂度o(1)
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=1,right=n
        while(left<right){
            let mid = left+Math.floor((right-left)/2)
            if(isBadVersion(mid)){
                right = mid
            }else{
                left = mid+1
            }
        }
        return left
    };
};
