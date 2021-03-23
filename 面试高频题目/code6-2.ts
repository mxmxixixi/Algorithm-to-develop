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
 * 自定义新链表的头const head = new ListNode(-1)，新链表的指针移动：tail = tail.next
 * 进位不为零时添加到链表结尾：tail.next = new ListNode(carry)
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(-1)
  let tail = head
  let carry = 0
  while(l1 || l2){
    const value1 = l1 ? l1.val:0;
    const value2 = l2 ? l2.val:0;
    const sum = value1 + value2 + carry
    const remainder = sum%10
    tail.next = new ListNode(remainder)
    tail = tail.next
    if(sum>=10){
      carry = Math.floor(sum/10)
    }else{
      carry = 0
    }
    l1 = l1?.next
    l2 = l2?.next
  }
  if(carry){
    tail.next = new ListNode(carry)
  }
  return head.next
};
