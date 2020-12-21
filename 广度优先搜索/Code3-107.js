/**
 * 解题思路
 * 二叉树的特点是每个节点的子节点不会超过两个
 * 根据题目中对二叉树数据的转化，其实是一颗完全二叉树的数据，使用null对数据进行补全
 * 由于每个节点的子节点必定有两个元素，所以每次寻找只需要找当前标记位置的后两个点即可
 * 使用sign数组标记已经访问过数组的位置，queue保存父节点,level保存同级的节点
 * 
 */
/**
 * 第一种解题思路
 * 误把root对象结构看成数组，所以结果不对
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root.length === 0) {
        return []
    }
    const queue = [root[0]], rootReverse = [root[0]];
    const sign = [0];
    let queueLength = queue.length;
    while (queue.length > 0) {
        const level = []
        while (queueLength--) {
            queue.shift();
            let i = sign[sign.length - 1];
            [1, 2].forEach((item) => {
                if (root[i + item] != null && root[i + item] != undefined) {
                    level.push(root[i + item]);
                    queue.push(root[i + item]);
                }
            })
            sign.push(i + 2);
        }
        queueLength = queue.length;
        if (level.length > 0) {
            rootReverse.unshift(level);
        }
    }
    return rootReverse
};
/**
 * 第一种解题思路
 * root根据提示函数TreeNode，可以找到对应节点的左右节点
 * 时间复杂度为O(n+m)，因为每个元素遍历了一次，n为元素的个数，还有rootReverse的倒叙插入，m为rootReverse的长度
 * 空间复杂度为O(2k+m)，k为二叉树中最底层元素的个数，queue存储一次，level存储一次,m为rootReverse的长度
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }
    const queue = [root], rootReverse = []
    let queueLength = queue.length
    while (queue.length > 0) {
        const level = []
        queueLength = queue.length
        while (queueLength--) {
            const node = queue.shift();
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        rootReverse.unshift(level)
    }
    return rootReverse
};