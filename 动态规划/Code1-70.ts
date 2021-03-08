/**
 * 解题思路：首先寻找规律
 * n=1:1,爬一个台阶；
 * n=2:2,爬一个台阶*2，或爬两个台阶；
 * n=3:3，可以在第一阶爬两阶，或者第二阶爬一阶
 * 所以找到规律，当在第n阶楼梯时与爬n-1和n-2的步数相关，此时只需再走爬一步或两步就到达n
 * 通用公式，F(n) = F(n-1)+F(n-2)
 */
function climbStairs(n: number): number {
    //第一二阶不需要套用公式
    if(n<=2){
        return n
    }
    //使用两个变量存储重叠子问题
    let current = 2,pre = 1
    for(let i=3;i<=n;i++){
        //通用公式，F(n) = F(n-1)+F(n-2)
        const count = pre + current
        //对current,pre赋值
        pre = current
        current = count
    }
    return current
};
console.log("climbStairs",climbStairs(3))
console.log("climbStairs",climbStairs(4))
console.log("climbStairs",climbStairs(5))
console.log("climbStairs",climbStairs(8))




