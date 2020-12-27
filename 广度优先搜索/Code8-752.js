/**
 * 解题思路-使用广度优先搜索；
 * 知识误区：当寻找第二步的节点时，不是只能移动一把锁的两个数，而是四把锁都可以移动；
 */
/**
 * 第一种解题思路
 */
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(target === '0000'){
        return 0
    }
    const _deadends=new Set(deadends)
    if(_deadends.has('0000')){
        return -1
    }
    const queue = ['0000'],visited = new Map([['0000',true]]),lockNum=4;
    let queueLength = queue.length,steps = 0
    const replaceStr = (str, index, char) => {
        return str.substring(0, index) + char + str.substring(index + 1);
        }
    while(queue.length){
        queueLength=queue.length;
        steps++
        while(queueLength--){
            const node = queue.shift();
            for(let index=0;index<lockNum;index++){
                let lockMove1 =  replaceStr(node,index,`${Number(node[index])+1>9? 0:Number(node[index])+1}`)
                if(lockMove1 === target){
                    return steps
                }
                if(!_deadends.has(lockMove1) && !visited.has(lockMove1)){
                    queue.push(lockMove1);
                    visited.set(lockMove1,true)
                }
                let lockMove2 =  replaceStr(node,index,`${Number(node[index])-1<0? 9:Number(node[index])-1}`)
                if(lockMove2 === target){
                    return steps
                }
                if(!_deadends.has(lockMove2) && !visited.has(lockMove2)){
                    queue.push(lockMove2);
                    visited.set(lockMove2,true)
                }
            }
        }
    }
    return -1
};
/**
 * 第二种解题思路；
 * 主要修改第一种思路的存储结构是，map转set，可以把deadends直接放入visited中当成已经访问过的节点;
 * 使用取余的算法更改三目`${(Number(node[index])-1+10)%10}`
 */
var openLock = function(deadends, target) {
    if(target === '0000'){
        return 0
    }
    if(deadends.findIndex(function(value, index, arr) {
  return value === '0000';
})!=-1){
        return -1
    }
    const queue = ['0000'],visited = new Set(['0000',...deadends]),lockNum=4;
    let queueLength = queue.length,steps = 0
    const replaceStr = (str, index, char) => {
        return str.substring(0, index) + char + str.substring(index + 1);
        }
    while(queue.length){
        queueLength=queue.length;
        steps++
        while(queueLength--){
            const node = queue.shift();
            for(let index=0;index<lockNum;index++){
                let lockMove1 =  replaceStr(node,index,`${(Number(node[index])+1+10)%10}`)
                if(lockMove1 === target){
                    return steps
                }
                if(!visited.has(lockMove1)){
                    queue.push(lockMove1);
                    visited.add(lockMove1);
                }
                let lockMove2 =  replaceStr(node,index,`${(Number(node[index])-1+10)%10}`)
                if(lockMove2 === target){
                    return steps
                }
                if(!visited.has(lockMove2)){
                    queue.push(lockMove2);
                    visited.add(lockMove2)
                }
            }
        }
    }
    return -1
};
