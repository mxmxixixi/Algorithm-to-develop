/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  const queue = [root]
  let height = 0
  while(queue.length > 0){
    let length = queue.length
    while(length>0){
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      length--
    }
    height++
  }
  return height
};