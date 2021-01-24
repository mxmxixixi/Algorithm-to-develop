/**
 * 按照题描述使用直接插入排序
 * 对于单链表的排序，只能是单向的寻找，所以在每次插入时只能从第一个元素开始寻找
 * 为了提升性能，可以记录每次寻找的最后一个元素，如果要插入的组值大于最后一个元素，则可以直接插入
 */
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
    let _head:ListNode = new ListNode(0),lastSorted = head,curr = head.next;
    _head.next = head
    while(curr != null){
        if(lastSorted.val <=curr.val){
            lastSorted = lastSorted.next
        }else{
            let nodeCompare = _head
             while (nodeCompare.next.val <= curr.val) {
                nodeCompare = nodeCompare.next;
            }
            lastSorted.next = curr.next;
            curr.next = nodeCompare.next;
            nodeCompare.next = curr;
        }
        curr = lastSorted.next;
    }
    return _head.next
};
// console.log("insertionSortList",insertionSortList(12,15,2))
// console.log("insertionSortList",insertionSortList(1,1,1))



