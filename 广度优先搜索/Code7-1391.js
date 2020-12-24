/**
 * 解题思路
 * 首先根据题目的思想，需要每个元素都遍历一次，所以使用广度优先搜索解答
 * 解答思路，从根节点开始，把根节点的左右节点依次存入队列中，每次出队一个元素，判断可以走下一步点的条件；
 * 根据题目描述生成moveDirection的Map,存储对应1-6的值可以移动的方向以及下一个点的可能值
 * 使用myMap进行标记已经访问过的元素，key为行列值的拼接，值为列的值，只要key不重复即可
 */
/**
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中myMap的最大元素个数。
 */
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const row = grid.length-1,col = grid[0].length-1;
    if(row === 0 && col === 0){
        return true
    }
    const moveDirection = new Map([
        [1,{'choose_1':{row:0,col:-1,nextValue:new Set([1,4,6])},'choose_2':{row:0,col:1,nextValue:new Set([1,3,5])}}],
        [2,{'choose_1':{row:-1,col:0,nextValue:new Set([2,3,4])},'choose_2':{row:1,col:0,nextValue:new Set([2,5,6])}}],
        [3,{'choose_1':{row:0,col:-1,nextValue:new Set([1,4,6])},'choose_2':{row:1,col:0,nextValue:new Set([2,5,6])}}],
        [4,{'choose_1':{row:0,col:1,nextValue:new Set([1,3,5])},'choose_2':{row:1,col:0,nextValue:new Set([2,5,6])}}],
        [5,{'choose_1':{row:0,col:-1,nextValue:new Set([1,4,6])},'choose_2':{row:-1,col:0,nextValue:new Set([2,3,4,])}}],
        [6,{'choose_1':{row:0,col:1,nextValue:new Set([1,3,5])},'choose_2':{row:-1,col:0,nextValue:new Set([2,3,4])}}]
    ])
    const queue=Array.of([0,0]),myMap = new Map([['0-0',0]]);
    let queueLength = queue.length;
    while(queue.length>0){
        queueLength = queue.length
        while(queueLength--){
            const node = queue.shift();
            const value = grid[node[0]][node[1]];
            //两次取值机会相同，但是没有用循环就是性能好一点
            const move_row_1 = node[0] + moveDirection.get(value).choose_1.row;
            const move_col_1 = node[1] + moveDirection.get(value).choose_1.col;
            const nextValue_1 = moveDirection.get(value).choose_1.nextValue
            if(move_row_1>=0 && move_row_1 <= row && move_col_1>=0 && move_col_1 <= col && myMap.get(`${move_row_1}-${move_col_1}`) !== move_col_1 && nextValue_1.has(grid[move_row_1][move_col_1]) ){
                queue.push([move_row_1,move_col_1]);
                myMap.set(`${move_row_1}-${move_col_1}`,move_col_1);
                if(move_row_1 === row && move_col_1 === col){
                    return true
                }
            }
            const move_row_2 = node[0] + moveDirection.get(value).choose_2.row;
            const move_col_2 = node[1] + moveDirection.get(value).choose_2.col;
            const nextValue_2 = moveDirection.get(value).choose_2.nextValue
            if(move_row_2>=0 && move_row_2 <= row && move_col_2>=0 && move_col_2 <= col && myMap.get(`${move_row_2}-${move_col_2}`) !== move_col_2 && nextValue_2.has(grid[move_row_2][move_col_2])){
                queue.push([move_row_2,move_col_2]);
                myMap.set(`${move_row_2}-${move_col_2}`,move_col_2);
                if(move_row_2 === row && move_col_2 === col){
                    return true
                }
            }
        }
    }
    return false
};