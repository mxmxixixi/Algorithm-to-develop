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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length == 1) return new TreeNode(nums[0]);
    let head = new TreeNode();
    let len = nums.length;
    let mid = Math.floor((len - 1) / 2);
    head.val = nums[mid];
    if (mid > 0) head.left = sortedArrayToBST(nums.slice(0, mid));
    if (mid < len - 1) head.right = sortedArrayToBST(nums.slice(mid + 1, len));
    return head;
};