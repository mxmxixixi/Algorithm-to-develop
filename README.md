# 前端-算法养成

#### 算法养成

- 主要是跟着力扣中题解的推荐题目以及类似题目、每日一题进行刷题
- 刷题顺序:哈希表、栈结构、桶计数、贪心算法、二分法、广度优先搜索

#### 分类题目

##### 二分法

- 概念

  - 二分查找也称为折半查找，每次都能将查找区间减半，这种折半特性的算法时间复杂度为 O(logN)。

- 应用

- 参考链接

- 题目

  - #### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

  - #### [744. 寻找比目标字母大的最小字母](https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/)

  - #### [540. 有序数组中的单一元素](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)

  - #### [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

##### 双指针

- 概念

  - 使用双指针可以快速的访问元素，减少循环，双指针可以是快慢指针，也可以是左右指针

- 题目

  - #### [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

  - #### [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

  - #### [680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)

##### 广度优先搜索

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

##### 深度优先搜索

- 概念

  - 深度优先搜索是一个对图进行搜索的算法，简称Depth-First-Search，DFS；
  - 从图的起点开始搜索直到到达目标结点，深度优先搜索会沿着一条路径不断往下搜索直到不能再继续为止，然后再折返，开始搜索下一条候补路径；
  - 每个节点只访问一次，所有节点采用先入后出的思想，因此采用栈结构来存储候补节点；也可以使用递归来进行访问节点

- 应用

- 参考链接

  - [掘金](https://juejin.cn/post/6844904142658338830)

- JavaScript实现思路

  - 使用栈结构

    - 声明一个函数，参数为：需要查找的树，需要查找的结点
    - 用数组模拟栈，将要查找的树放入栈中
    - 遍历栈，直至栈中的数据为空
    - 取出栈顶元素，判断其是否有子结点
    - 如果存在子结点，遍历子结点将其放入栈中，遍历时需要确保它是**从左到右遍历**
    - 判断当前栈顶的元素是否与要查找的元素相等，如果相等则返回当前元素
    - 栈中数据全部遍历后，还是没找到目标结点，则证明目标结点不在树中，返回false

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
      function depthFirstSearch (grid) {    
        let ans = 0;
        const rowLength = grid.length,columnLength = grid[0].length
        const def = (row,column)=>{
            if(row<0||row>=rowLength||column<0||column>=columnLength||grid[row][column] === 0){
                return 0
            }
            let island = 1
            grid[row][column]=0
            island+=def(row-1,column)
            island+=def(row+1,column)
            island+=def(row,column-1)
            island+=def(row,column+1)
            return island
        };
        for(let row=0;row<rowLength;row++){
            for(let column =0;column<columnLength;column++){
                if(grid[row][column] ===1){
                    ans=Math.max(ans,def(row,column))
                }
            }
        }
        return ans
    }
    ```

    

  

- 题目

  - #### [695. 岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/)
  
  - #### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
  
  - #### [417. 太平洋大西洋水流问题](https://leetcode-cn.com/problems/pacific-atlantic-water-flow/)
