## 前端-算法养成

### 算法养成

- 主要是跟着力扣中题解的推荐题目以及类似题目、每日一题进行刷题
- 刷题顺序:哈希表、栈结构、桶计数、贪心算法、二分法、广度优先搜索

### 分类题目

#### 删除改变字符符合规定元素

- 题目

  - #### [665. 非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/)

#### 二分法

- 概念

  - 二分查找也称为折半查找，每次都能将查找区间减半，这种折半特性的算法时间复杂度为 O(logN)。

- 应用

- 参考链接

- 题目

  - #### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

  - #### [744. 寻找比目标字母大的最小字母](https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/)

  - #### [540. 有序数组中的单一元素](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)

  - #### [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

#### 双指针

- 概念

  - 使用双指针可以快速的访问元素，减少循环，双指针可以是快慢指针，也可以是左右指针

- 题目

  - #### [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

  - #### [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

  - #### [680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)

#### 广度优先搜索

- 概念

  - 广度优先搜索（也称宽度优先搜索，缩写 BFS，以下采用广度来描述）是连通图的一种遍历算法这一算法也是很多重要的图的算法的原型。。其别名又叫 BFS，属于一种盲目搜寻法;
  - 系统地展开并检查图中的所有节点，以找寻结果。换句话说，它并不考虑结果的可能位置，彻底地搜索整张图，直到找到结果为止。
  - BFS 是从根节点开始，沿着树(图)的宽度遍历树(图)的节点。如果所有节点均被访问，则算法中止，所以需要标志节点是否已经被访问过。
  - 一般用队列数据结构来辅助实现 BFS 算法。

- 应用

  - Dijkstra 单源最短路径算法和 Prim 最小生成树算法都采用了和宽度优先搜索类似的思想

- 参考链接

  - [简书链接](https://www.jianshu.com/p/bff70b786bb6)
  - [掘金](https://juejin.cn/post/6844904133204377608)

- 题目

  - #### [1091. 二进制矩阵中的最短路径](https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/)

  - #### [127. 单词接龙](https://leetcode-cn.com/problems/word-ladder/)

  - #### [107. 二叉树的层次遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

  - #### [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)

  - #### [116. 填充每个节点的下一个右侧节点指针](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)

  - #### [690. 员工的重要性](https://leetcode-cn.com/problems/employee-importance/)

  - #### [1306. 跳跃游戏 III](https://leetcode-cn.com/problems/jump-game-iii/)

  - #### [1391. 检查网格中是否存在有效路径](https://leetcode-cn.com/problems/check-if-there-is-a-valid-path-in-a-grid/)

  - #### [752. 打开转盘锁](https://leetcode-cn.com/problems/open-the-lock/)

#### 深度优先搜索

- 概念

  - 深度优先搜索是一个对图进行搜索的算法，简称 Depth-First-Search，DFS；
  - 从图的起点开始搜索直到到达目标结点，深度优先搜索会沿着一条路径不断往下搜索直到不能再继续为止，然后再折返，开始搜索下一条候补路径；
  - 每个节点只访问一次，所有节点采用先入后出的思想，因此采用栈结构来存储候补节点；也可以使用递归来进行访问节点

- 应用

- 参考链接

  - [掘金](https://juejin.cn/post/6844904142658338830)

- JavaScript 实现思路

  - 使用栈结构

    - 声明一个函数，参数为：需要查找的树，需要查找的结点
    - 用数组模拟栈，将要查找的树放入栈中
    - 遍历栈，直至栈中的数据为空
    - 取出栈顶元素，判断其是否有子结点
    - 如果存在子结点，遍历子结点将其放入栈中，遍历时需要确保它是**从左到右遍历**
    - 判断当前栈顶的元素是否与要查找的元素相等，如果相等则返回当前元素
    - 栈中数据全部遍历后，还是没找到目标结点，则证明目标结点不在树中，返回 false

    ```
      /** 
      * 深度优先搜索 
      * @param tree 需要查找的树 
      * @param target 需要查找的结点 
      * @returns {{children}|*|undefined|boolean} 
      */
      function depthFirstSearch (tree, target) {    
        // 用数组模拟栈，将树放进栈中    
        let stack = [tree];    
        while(stack.length!==0){       
          // 取出数组的最后一个元素(栈顶)        
          const stackTop = stack.pop();        
          // 判断当前栈是否有子结点        
          if (stackTop.children && stackTop.children.length) {            
            /**            
            * 将子结点入栈：            
            *  1. 使用扩展运算符取出参数对象,使用reverse方法将数组中的元素进行颠倒            
            *  2. 使用扩展运算符取出颠倒后数组中的对象             
            *  3. 将取出的对象放进栈中             
            */           
            stack.push(...[...stackTop.children].reverse());        }       
            // 判断当前栈顶的元素是否为目标值        
            if (stackTop.value === target) {            
              return stackTop;        
            }    
        }    
        return false;
      }
    ```

  - 使用递归

    - 深度 优先搜索的思想是一致的；只不过此种方法使用递归进行深度搜索

    ```javascript
    /**
     * 深度优先搜索
     * @param grid 需要查找的二维矩阵
     * @returns {number}
     */
    function depthFirstSearch(grid) {
      let ans = 0;
      const rowLength = grid.length,
        columnLength = grid[0].length;
      const def = (row, column) => {
        if (
          row < 0 ||
          row >= rowLength ||
          column < 0 ||
          column >= columnLength ||
          grid[row][column] === 0
        ) {
          return 0;
        }
        let island = 1;
        grid[row][column] = 0;
        island += def(row - 1, column);
        island += def(row + 1, column);
        island += def(row, column - 1);
        island += def(row, column + 1);
        return island;
      };
      for (let row = 0; row < rowLength; row++) {
        for (let column = 0; column < columnLength; column++) {
          if (grid[row][column] === 1) {
            ans = Math.max(ans, def(row, column));
          }
        }
      }
      return ans;
    }
    ```

- 题目

  - #### [695. 岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/)

  - #### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

  - #### [417. 太平洋大西洋水流问题](https://leetcode-cn.com/problems/pacific-atlantic-water-flow/)

  - #### [130. 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)

  - #### [547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)

  - #### [971. 翻转二叉树以匹配先序遍历](https://leetcode-cn.com/problems/flip-binary-tree-to-match-preorder-traversal/)

  - #### [529. 扫雷游戏](https://leetcode-cn.com/problems/minesweeper/)

#### 分治算法

- 概念

  - 分治法是构建基于多项分支递归的一种很重要的算法范式。字面上的解释是「分而治之」，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。
  - 在这广义之下，所有使用递归或循环的算法均被视作“分治算法”

- 题目

  - #### [468. 验证 IP 地址](https://leetcode-cn.com/problems/validate-ip-address/)

  - #### [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

#### 排序算法

- 概念
  - 排序有很多中方法，都是按照条件，进行升序或降序的操作；
  - 稳定排序：假设在待排序的文件中，存在两个或两个以上的记录具有相同的关键字，在用某种排序法排序后，若这些相同关键字的元素的相对次序仍然不变，则这种排序方法是稳定的。其中冒泡，插入，基数，归并属于稳定排序，选择，快速，希尔，堆排序，归属于不稳定排序。
  - [对排序算法的官方解释](https://baike.baidu.com/item/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/5399605?fr=aladdin)

##### 快速排序

- 概念

  - 快排的性能在所有排序算法里面是最好的，数据规模越大快速排序的性能越优。快排在极端情况下会退化成 ![[公式]](https://www.zhihu.com/equation?tex=O%28n%5E%7B2%7D%29) 的算法，因此**假如在提前得知处理数据可能会出现极端情况的前提下**，可以选择使用较为稳定的归并排序；

  - 快速排序实现的思想：

    - 先从数列中取出一个数作为基准数，此时基准数的位置就是一个已挖好的坑；
    - 分区过程,使用首末的双指针开始比较与基准的大小，先从末尾指针开始比较与基准的大小，如果大于基准则不动，末指针继续向前，小于基准则放入前面挖好的坑中，此时的位置成为下一个以及挖好的坑；之后从首指针的位置开始比较，如果小于基准则不动，首指针继续向后，大于基准则放入前一个挖好的坑中，直到首末指针相遇说明此次的基准寻找数完成；
    - 再对左右区间重复第二步，直到各区间只有一个数

  - 如何选择基准

    > 实际上无论怎么选择基准，都不会影响排序结果，**但是不同的选择却可能影响整体排序时间**，因为基准选择不同，会导致分割的两个集合大小不同，如果分割之后，两个集合大小是几乎相等的，那么我们**整体分割的次数显然也会减少，这样整体耗费的时间也相应降低**

    - 如果待排序数是随机的，那么选择第一个或者最后一个作基准是没有什么问题的，这也是我们最常见到的选择方案。但如果待排序数据已经排好序的，就**会产生一个很糟糕的分割**。几乎所有的数据都被分割到一个集合中，而另一个集合没有数据。这样的情况下，**时间花费了，却没有做太多实事**。而它的时间复杂度就是最差的情况 O(N^2)。**因此这种策略是绝对不推荐的**,所以出现极端情况后应该使用归并排序；
    - 从前面的描述我们知道，如果能够选择到数据的中值，那是最好的，因为它能够将集合近乎等分为二。但是很多时候很难算出中值，并且会耗费计算时间。因此我们随机选取三个元素，并用它们的中值作为整个数据中值的估计值。在这里，我们选择最左端，最右端和中间位置的三个元素的中间值作为基准，这种方法不推荐

- 性能

  - 时间复杂度：平均情况 o(Nlog₂n)，最坏情况 o(N2),最好情况 o(Nlog₂n),当数据有序时，以第一个关键字为基准分为两个子序列，前一个子序列为空，此时执行效率最差。而当数据随机分布时，以第一个关键字为基准分为两个子序列，两个子序列的元素个数接近相等，此时执行效率最好，所以，数据越随机分布时，快速排序性能越好；数据越接近有序，快速排序性能越差；
  - 空间复杂度：快速排序在每次分割的过程中，需要 1 个空间存储基准值。而快速排序的大概需要 Nlog2N 次的分割处理，所以占用空间也是 Nlog₂n 个。
  - 稳定性：在快速排序中，相等元素可能会因为分区而交换顺序，所以它是不稳定的算法。
  
- 代码实现

  ```javascript
  //快速排序
  //此处示例的降序
  const quickSort = (_left: number, _right: number) => {
    if (_left >= _right) {
      return;
    }
    let left = _left,right = _right;
    //按照数据以及数据量的不同，选择不同的基准
    const standard = nums[left];
    //在以一个基准进行排序时，跳出条件是两个指针相遇
    while (left < right) {
      //因为以左指针为基准所以先从右指针向前找，找到第一个大于基准数的坐标，此判断条件有两个一个是指针，一个是与基准的大小，两个条件都是必要的；
      while (left < right && nums[right] <= standard) {
        right--;
      }
      //当找到第一个大于基准的数进行填坑行为，必须要加指针的判断条件，因为不能判断上面的循环跳出条件是哪一个，有可能是指针不符合条件，如果指针不符合条件，则不需要填坑行为
      left < right && (nums[left++] = nums[right]);
      while (left < right && nums[left] >= standard) {
        left++;
      }
      left < right && (nums[right--] = nums[left]);
    }
    //一轮基准结束，讲基准数填入到跳出条件的坑
    nums[left] = standard;
    //以基准为线，进行左右两侧的递归
    quickSort(_left, left - 1);
    quickSort(left + 1, _right);
  };
  quickSort(0, nums.length - 1);
  ```

- 题目

  - #### [215. 数组中的第 K 个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

  - #### [912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)
  
  - #### [1630. 等差子数组](https://leetcode-cn.com/problems/arithmetic-subarrays/)
  
  - #### [1329. 将矩阵按对角线排序](https://leetcode-cn.com/problems/sort-the-matrix-diagonally/)
  
  - #### [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)
  
  - #### [1508. 子数组和排序后的区间和](https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/)
  
  - #### [75. 颜色分类](https://leetcode-cn.com/problems/sort-colors/)
  

##### 插入排序

###### 直接插入排序

- 概念
  - 插入排序，一般也被称为直接插入排序；
  - 使用情况，我认为适用于已经有一定顺序的情况，才使用插入排序，或者排序的数据是动态生成的，可以在每一项数据生成时直接进行排序，否则可以使用快速排序，提升性能
  - 插入排序的基本思想是：每次将 1 个待排序的记录按其关键字大小插入到前面已经排好序的子序列中，寻找最适当的位置，直至全部记录插入完毕。执行过程中，若遇到和插入元素相等的位置，则将要插人的元素放在该相等元素的后面，因此插入该元素后并未改变原序列的前后顺序。插入排序也是一种稳定的排序方法。插入排序分直接插入排序(稳定)、折半插入排序和希尔排序(不稳定)3 类；

- 性能
  - 时间复杂度：
    - 最优的情况:在插入排序中，当待排序数组是有序时,只需当前数跟前一个数比较一下就可以了，这时一共需要比较 N- 1 次，时间复杂度为 O(N)
    - 最坏的情况:是待排序数组是逆序的，此时需要比较次数最多，总次数记为：1+2+3+…+N-1，所以，插入排序最坏情况下的时间复杂度为 O(N<sup>2</sup>)
    - 平均来说，A[1..j-1]中的一半元素小于 A[j]，一半元素大于 A[j]。插入排序在平均情况运行时间与最坏情况运行时间一样，是 O(N<sup>2</sup>);
  - 空间复杂度：插入排序的空间复杂度为常数阶 O(1)
  
- 题目

  - #### [1387. 将整数按权重排序](https://leetcode-cn.com/problems/sort-integers-by-the-power-value/)

  - #### [147. 对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)
  
  - #### [1333. 餐厅过滤器](https://leetcode-cn.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/)
  

###### 二分插入排序

 - 概念
   	- 在直接插入排序的概念上，增添排序的条件，形成二分插入排序；
   - 二分，顾名思义，和二分法是一个思想，把一个区间分成两个，之后判断目标元素在哪个区间内；
- 性能
  - 时间复杂度：最好的情况是当插入的位置刚好是二分位置 所用时间为O(log₂n);最坏的情况是当插入的位置不在二分位置 所需比较次数为O(n)，无限逼近线性查找的复杂度。S<=∑n「log₂n「-2^n「log₂n「+1k= 1，平均时间O(n^2)
  - 空间复杂度：O(1)
  - 稳定性：法中通过right<left来控制二分查找的结束，以temp<a[mid]为稳定控制条件，所以二分插入排序算法是稳定的。

##### 归并排序

- 概念

  - 归并排序采用分治法；归并排序的思想简单，速度仅次于快速排序，为**稳定排序算法**，**一般用于对总体无序，但是各子项相对有序的数列**；

  - 归并排序有两种实现方案：自底向上和自顶向下；

  - **自顶向下方法**，采用分治模式，先对数据进行分解，分解成可以容易排序的子序列，子序列排序后进行合并，在每一层递归上有三个步骤：

    - **分解（Divide）**：将n个元素分成个含n/2个元素的子序列。

    - **解决（Conquer）**：对子序列进行排序。

    - **合并（Combine）**：合并两个已排序的子序列，得到排序结果。

    - ```javascript
      const merge = (left,right)=>{
        var temp=[];
        while(left.length&&right.length){
          if(left[0]<=right[0]){
            temp.push(left.shift());
          }else{
            temp.push(right.shift());
          }
        }
        //left和right长度不一样时，直接连接剩下的长的部分（本身有序）
        return temp.concat(left,right);
      
      }
      const mergeSort = (data)=>{
        if(data.length<=1){
          return data;
        }
        var mid=Math.floor(data.length/2);
        var left=data.slice(0,mid);
        var right=data.slice(mid);
        return  merge(mergeSort(left),mergeSort(right));
      }
      ```

  - **自底向上方法**，也就是常说的**二路归并排序**，其基本思想是：第 1 趟排序将长度为 n 的待排序记录看作 n 个长度为 1 的有序子序列，然后将这些子序列两两合并。完成第 1 趟排序之后，将得到 lgn 个长度为 2 的有序子序列（如果 n 为奇数，则最后还有一个长度为 1 的子序列）。第 2 趟排序是在第 1 趟的排序的基础上，将这 lgn 个长度为 2 的子序列两两合并。如此反复，直到最后得到一个长度为n的有序文件为止。从这个排序过程来看，二路归并排序是从将长度为 1 的子序列排序变化到长度为 n 的有序序列，因而是自底向上的。

- 题目

  - #### [148. 排序链表](https://leetcode-cn.com/problems/sort-list/)
  
  - #### [1451. 重新排列句子中的单词](https://leetcode-cn.com/problems/rearrange-words-in-a-sentence/)

##### TimSort

 - 概念
   	- [参考链接](https://juejin.cn/post/6844904131518267400)

##### 综合题目

- #### [1424. 对角线遍历 II](https://leetcode-cn.com/problems/diagonal-traverse-ii/)

#### 动态规划

- 概念
  
- [参考链接](https://labuladong.github.io/algo/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AF%A6%E8%A7%A3%E8%BF%9B%E9%98%B6.html)
  
- 题目

  - #### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
  
  - #### [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
  
  - #### [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
  
  - #### [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)
  
  - #### [413. 等差数列划分](https://leetcode-cn.com/problems/arithmetic-slices/)

#### 滑动窗口

- 概念
  - 涉及到子串，使用滑动窗口思想

 - 题目

   	- #### [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)