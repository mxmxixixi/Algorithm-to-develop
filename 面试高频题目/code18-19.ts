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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const temp = new ListNode(0,head)
  //fast、slow表示链表上指针的位置
  let fast =  head, slow = temp
  for(let i=0;i<n;i++){
      fast = fast.next
  }
  while(fast){
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return temp.next
};