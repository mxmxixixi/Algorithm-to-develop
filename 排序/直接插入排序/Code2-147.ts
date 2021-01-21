/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertionSortList(head: ListNode | null): ListNode | null {
    if(head === null){
        return head
    }
    const _head:ListNode = null
    const insertionSort = (node:ListNode) => {
        if(node === null){
            return
        }
        if(node.val <=head.val){
            node.next = head
        }else{
            let nodeCompare = head.next
            while(nodeCompare != null){
                if(node.val <=nodeCompare.val){
                    node.next = nodeCompare
                    break
                }else{
                    nodeCompare = nodeCompare.next
                }
            }
        }
        insertionSort(node.next)
    }
    insertionSort(head.next)
    return head
};
// console.log("insertionSortList",insertionSortList(12,15,2))
// console.log("insertionSortList",insertionSortList(1,1,1))



