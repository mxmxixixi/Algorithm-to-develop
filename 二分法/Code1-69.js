/**
 * @param {number} x
 * @return {number}
 */
/**
 * 第一次解题思路
 * 要寻找的数一直在0-x之间，因此就是形成了一个有序的循环
 * 在直接循环从0-x就是可以的，但是有序的这个条件并没有使用，因此二分法的思想刚好用上
 * 二分法主要是找中间值进行判断条件，之后判断指针移动
 *时间复杂度o(logN),空间复杂度o(1)
 */
var mySqrt = function(x) {
    let left=0,right=x
    if(x === 1){
        return 1
    }
    while(left+1<right){
        let avg=Math.floor((right+left)/2)
        if(Math.pow(avg,2)<x){
            left = avg
        }else if(Math.pow(avg,2)>x){
            right = avg
        }else{
            return avg
        }
    }
    return left
};
<font color="red"></font>
/**
 *第二次解题思路[看二分法思想后]
 *时间复杂度o(logN),空间复杂度o(1)
*/
var mySqrt = function(x) {
    let left=0,right=x,ans=0
    while(left<=right){
        let avg=Math.floor(left+(right-left)/2)//这样计算不会有数溢出的情况，right+left容易发生溢出
        if(Math.pow(avg,2)<=x){
            ans = avg//要寻找的其实是小于x的最大值，在升序中循环，更大的值符合条件就可以直接赋值
            left = avg+1
        }else{
            right = avg-1
        }
    }
    return ans
};