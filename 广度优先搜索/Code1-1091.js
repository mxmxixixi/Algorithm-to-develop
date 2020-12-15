/**
 * 解题思路
 * 首先确定使用算法类型-广度优先搜索
 * 根据算法思想，首选确定辅助队列中存放的是矩阵中节点的位置，以及及时标记已经放过的节点[grid[newRow][newColumn] = 1]
 * 现在开始判断矩阵中一个点可能可以走到的位置，根据最中心的点可以看出，下一步可能有8个位置
 * 于是定义moveDirection数组，其中每一个元素数据都是以该点为中心需要移动的距离
 * 其余就是对于边界值的判断，可以减少循环
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 第一种解题思路
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
var shortestPathBinaryMatrix = function (grid) {
    const rowColumn = grid.length - 1
    if (grid[rowColumn][rowColumn] === 1 || grid[0][0] === 1) {
        return -1
    }
    const queue = [[0, 0]];
    grid[0][0] = 1;
    const moveDirection = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    let newRow, newColumn, steplength = 0, queueLength = queue.length
    while (queue.length > 0) {
        steplength++
        while (queueLength--) {//此处循环是因为在寻找下一个可以走的节点的时候可能存在多个节点，需要对多个节点进行出队的操作，所以才能找到最短路径
            const node = queue.shift();
            if (node[0] === rowColumn && node[1] === rowColumn) {
                return steplength
            }
            moveDirection.forEach((location) => {
                newRow = node[0] + location[0];
                newColumn = node[1] + location[1];
                if (newRow < 0 || newRow > rowColumn || newColumn < 0 || newColumn > rowColumn || grid[newRow][newColumn]) {
                    return;
                }
                queue.push([newRow, newColumn]);
                grid[newRow][newColumn] = 1
            })
        }
        queueLength = queue.length
    }
    return -1
};
/**
 * 第二种解题思路
 * 基本思路与第一种相同，不相同的点为运用的第二个循环，我把第二个循环进行省略，替换成queue队列记录步数
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
var shortestPathBinaryMatrix = function (grid) {
    const rowColumn = grid.length - 1
    if (grid[rowColumn][rowColumn] === 1 || grid[0][0] === 1) {
        return -1
    }
    const queue = [{ node: [0, 0], steps: 1 }];
    grid[0][0] = 1;
    const moveDirection = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    let newRow, newColumn;
    while (queue.length) {
        const { node: [row, column], steps } = queue.shift();
        if (row === rowColumn && column === rowColumn) { return steps; }
        moveDirection.forEach(([x, y]) => {
            newRow = row + x;
            newColumn = column + y;
            if (newRow < 0 || newRow > rowColumn || newColumn < 0 || newColumn > rowColumn || grid[newRow][newColumn]) {
                return;
            }
            queue.push({ node: [newRow, newColumn], steps: steps + 1 });
            grid[newRow][newColumn] = 1
        })
    }
    return -1
};