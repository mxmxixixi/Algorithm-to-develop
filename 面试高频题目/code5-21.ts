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
/**
 * 链表操作：链表指针移动：l1 = l1.next
 * 自定义新链表的头const head = new ListNode(-1)，新链表的指针移动：prevHead = prevHead.next
 * /
 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(-1)
  let prevHead = head
  while(l1 !== null && l2 !== null){
    if(l1.val <= l2.val){
      prevHead.next = l1
      l1 = l1.next
    }else{
      prevHead.next = l2
      l2 = l2.next
    }
    prevHead = prevHead.next
  }
  prevHead.next = l1 === null ? l2 : l1
  return head.next
};
