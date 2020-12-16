/**
 * 解题思路
 * 首先看到题目中包含最短两次，确定使用算法类型-广度优先搜索
 * 根据算法思想，首选确定辅助队列中存放的是下一步转换成的元素，并进行标识wordList[i] = 1已经访问过
 * transLate方法中比较两个字符是否只相差一个字符
 * 其余就是对于边界值的判断，可以减少循环
 */
/**
 * 第一种解题思路
 * 时间复杂度为O(n*c)，因为每个元素遍历了一次，n为元素的个数,c为字段的长度
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const transLate = (source, contrast) => {
    let count = 0
    for (let i = 0; i < source.length; i++) {
        if (source[i] != contrast[i]) {
            count++
        }
        if (count > 1) {
            return false
        }
    }
    return true
}
var ladderLength = function (beginWord, endWord, wordList) {
    const queue = [beginWord]
    let steps = 1, queueLength = queue.length
    while (queue.length > 0) {
        steps++
        while (queueLength--) {
            const node = queue.shift()
            for (let i = 0; i < wordList.length; i++) {
                if (wordList[i] != 1 && transLate(node, wordList[i])) {
                    if (wordList[i] === endWord) {
                        return steps
                    }
                    queue.push(wordList[i])
                    wordList[i] = 1
                }
            }
        }
        queueLength = queue.length
    }
    return 0
};
/**
 * 第二种解题思路[看题解后]
 * 所有单词只由小写字母组成，字典中不存在重复的单词这两个条件均没有用上
 * 所有单词只由小写字母组成这个条件可以简化transLate方法,生成26个小写字母对应的数组进行循环
 * 字典中不存在重复的单词可以使用Set结构
 * 时间复杂度为O(n*c)，因为每个元素遍历了一次，n为元素的个数,c为字段的长度
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    const visited = new Set();

    let res = 1;
    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }
        let nextLevelSet = new Set();
        for (let word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let j = 97; j <= 122; j++) {
                    const nextWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
                    if (wordSet.has(nextWord)) {
                        if (endSet.has(nextWord)) return res + 1;
                        if (!visited.has(nextWord)) {
                            nextLevelSet.add(nextWord);
                            visited.add(nextWord);
                        }
                    }
                }
            }
        }
        beginSet = nextLevelSet;
        res++;
    }
    return 0;
};