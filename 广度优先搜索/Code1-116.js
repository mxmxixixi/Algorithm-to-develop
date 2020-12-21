/**
 * 解题思路
 * 首先根据题目的思想，需要每个元素都遍历一次，所以使用广度优先搜索解答
 * 解答思路，从根节点开始，把根节点的左右节点依次存入队列中，每次出队一个元素，对next节点进行赋值，
 * 赋值过程是取队列的第一个元素，因为存进队列就是按照左右节点顺序存
 * 临界条件:某一行的最后一个元素next节点为null
 */
/**
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) {
        return root
    }
    const queue = [root];
    let queueLength = queue.length
    while (queue.length > 0) {
        queueLength = queue.length
        while (queueLength--) {
            const node = queue.shift()
            if (queueLength > 0) {
                node.next = queue[0]
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return root
};