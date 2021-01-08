/**
构造节点函数
*/
function TreeNode(val){
    //节点值
    this.val = val;
    //左子树
    this.left = null;
    //右子树
    this.right = null;
  }
/**
 * 根据数组生成二叉树
 * 规则： 若当前节点为下标n的元素，则它的左节点为下标2*n+1元素，右节点为2*n+2元素。上下节点相差2倍
 * @param arr 给定数组
 * @param index 数组下标
 * @param len 数组长度
 * @return
 */
  const CreateBinaryTree = (arr,index,len) =>{
    if (arr.length === 0){
      return null;
    }
    var node = null;
    //当前数组下标小于数组长度并且当前下标的值不为null时
    if (index < len && arr[index] != null){
        //将当前坐标的元素构建一个节点
        node = new TreeNode(arr[index]);
        //当前节点的左子树元素集合为[2*n+1,len)
        node.left = CreateBinaryTree(arr,index*2+1,len);
       //当前节点的右子树元素集合为[2*n+2,len)
        node.right = CreateBinaryTree(arr,index*2+2,len);
    }
    return node;
  }
//   const arr = [3,9,20,null,null,15,7];
//   const root = createBinaryTree(arr,0,arr.length);
//   console.log(root);
  export default CreateBinaryTree