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
/**
 * 递归
 */
 function isSymmetric(root: TreeNode | null): boolean {
  const check = (q:TreeNode|null,p:TreeNode|null)=>{
    if(!q && !p){
      return true
    }
    if(!q || !p){
      return false
    }
    return q.val === p.val && check(q.left,p.right) && check(q.right,p.left)
  }
  return check(root,root)
};