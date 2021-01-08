import CreateBinaryTree from '../ArrToTree.js'
/**
 * 解题思路
 * 首先确定使用算法类型-深度优先搜索
 * 根据算法思想，从根节点开始一直向深处探索符合条件的节点;
 * 先序遍历的特点:根左右;
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
 * @param {number[]} voyage
 * @return {number[]}
 */
/**
 * 第一种解题思路:使用递归
 * 主要是找到匹配voyage的条件，这个voyage主要出现两种可能情况：
 * voyage中的节点是否相等，一旦不相等就返回[-1],一旦不相等就说明voyage行程不匹配;
 * voyage中的下一个节点是否等于当前节点的左节点或者右节点，如果不相等则该节点的子节点需要翻转
 * 此解法中根据不同的递归顺序访问节点
 */
var flipMatchVoyage = function(root, voyage) {
    const firstOrder = [];
    let nodeIndex = 0
    const def = (node)=>{
        if(node === null){
            return
        }
        if(voyage[nodeIndex] != node.val){
            firstOrder.length=0
            firstOrder.push(-1)
            return
        }
        nodeIndex++
        if(nodeIndex<voyage.length && node.left != null && voyage[nodeIndex] != node.left.val){
            firstOrder.push(node.val)
            def(node.right)
            def(node.left)
        }else{
            def(node.left)
            def(node.right)
        }
    }
    def(root)
    return firstOrder[0] != -1 ? firstOrder:[-1]
};
/**
 * 第一种解题思路:使用递归
 * 主要是找到匹配voyage的条件，这个voyage主要出现两种可能情况：
 * voyage中的节点是否相等，一旦不相等就返回[-1],一旦不相等就说明voyage行程不匹配;
 * voyage中的下一个节点是否等于当前节点的左节点或者右节点，如果不相等则该节点的子节点需要翻转
 * 此解法中根据交互子节点进行递归,递归顺序为先左节点后右节点，根据先序的顺序，控制voyage行程不匹配使用变量控制
 */
var flipMatchVoyage = function(root, voyage) {
    const firstOrder = [];
    let nodeIndex = 0,isVoyage = false
    const def = (node)=>{
        if(node === null){
            return
        }
        if(voyage[nodeIndex] != node.val){
            isVoyage = true
            return
        }
        nodeIndex++
        if(nodeIndex<voyage.length && node.left != null && voyage[nodeIndex] != node.left.val){
            firstOrder.push(node.val)
            const temp = node.left
            node.left = node.right
            node.right = temp
        }
        def(node.left)
        def(node.right)
    }
    def(root)
    return isVoyage ? [-1]:firstOrder
};
console.log('flipMatchVoyage',flipMatchVoyage(CreateBinaryTree([1,2],0,2),[2,1]));
console.log('flipMatchVoyage',flipMatchVoyage(CreateBinaryTree([1,2,3],0,3),[1,3,2]));
console.log('flipMatchVoyage',flipMatchVoyage(CreateBinaryTree([1,2,3],0,3),[1,2,3]));