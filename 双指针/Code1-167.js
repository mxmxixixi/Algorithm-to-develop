<font color="red"></font>


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * 第一次解题思路:
 * 从数组中寻找两个数，使用map结构可以减少一层循环，直接从堆里面进行取数据，时间复杂度降低；
 * map结构中数据是如何存进去的呢，我们在对数组进行循环时，定义两个数的和等于目标数，如果第二个数不存在map中，那就将第一个数存到map中；代码实现如下;
 * 时间复杂度o(n),空间复杂度o(n)
 */
var twoSum = function(numbers, target) {
		const myMap = new Map()
    for(let i=0;i<numbers.length;i++){
        const first = numbers[i]
        const seconed = target - first
        if(myMap.has(seconed) && i+1 !=myMap.get(seconed)){//寻找第二个数的逻辑
            return [myMap.get(seconed),i+1]
        }else{
            myMap.set(first,i+1)//如果没有找到第二个数则进行存储数据
        }
    }

};
/**
 * 第二次解题思路:
 * 主要看题目中给到的升序排列的这个条件没有用到，两数之和是固定的，所以数组第一项与最后一项之和与目标元素进行比较，之后可以把第一项或最后一项向前或向后移动
 * 此方法叫做双指针方，时间复杂度可以优化到o(n/2)，声明的变量是常量，节省空间，空间复杂度为o(1)
 */
var twoSum = function(numbers, target) {
    let i = 0,j=numbers.length-1
    do{
        if(numbers[i]+numbers[j]>target){
            j--
        }else if(numbers[i]+numbers[j]<target){
            i++
        }else{
            return [i+1,j+1]
        }
    }while(i != j)
}