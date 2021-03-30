/**
 * 哈希表
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const assistMap = new Map();
  let _headA = headA,_headB = headB,point = null
  while(_headA != null){
      assistMap.set(_headA,_headA.val)
      _headA = _headA.next
  }
  while(_headB != null){
      if(assistMap.has(_headB) && assistMap.get(_headB) !=0){
          point = _headB
          break
      }
      _headB = _headB.next
  }
  return point
};
/**
 * 双指针
 * 创建两个指针 pA和 pB，分别初始化为链表 A 和 B 的头结点。然后让它们向后逐结点遍历。
 * 当 pA到达链表的尾部时，将它重定位到链表 B 的头结点 (你没看错，就是链表 B); 类似的，当 pB 到达链表的尾部时，将它重定位到链表 A 的头结点。
 * 若在某一时刻 pA 和 pB 相遇，则 pA/pB 为相交结点。
 * 想弄清楚为什么这样可行, 可以考虑以下两个链表: A={1,3,5,7,9,11} 和 B={2,4,9,11}，相交于结点 9。 由于 B.length (=4) < A.length (=6)，pBpB 比 pApA 少经过 2 个结点，会先到达尾部。将 pBpB 重定向到 A 的头结点，pApA 重定向到 B 的头结点后，pBpB 要比 pApA 多走 2 个结点。因此，它们会同时到达交点。
 * 如果两个链表存在相交，它们末尾的结点必然相同。因此当 pA/pB 到达链表结尾时，记录下链表 A/B 对应的元素。若最后元素不相同，则两个链表不相交。
 */
 function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let nodeA = headA;
  let nodeAEnd, nodeBEnd;
  let nodeB = headB;
  while (nodeA !== nodeB) {
    if (nodeA.next === null) {
      nodeAEnd = nodeA;
      nodeA = headB;
    } else {
      nodeA = nodeA.next;
    }

    if (nodeB.next === null) {
      nodeBEnd = nodeB;
      nodeB = headA;
    } else {
      nodeB = nodeB.next;
    }

    if (nodeAEnd !== void 0 && nodeBEnd !== void 0 && nodeAEnd !== nodeBEnd) {
      return null;
    }
  }
  return nodeA
};