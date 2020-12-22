/**
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    const queue = [start];
    const map = new Map();
    map.set(start, true);
    let queueLength = queue.length
    while (queue.length > 0) {
        queueLength = queue.length
        while (queueLength--) {
            const i = queue.shift()
            if (arr[i] === 0 || arr[i + arr[i]] === 0 || arr[i - arr[i]] === 0) {
                return true
            }
            if (arr[i + arr[i]] && !map.has(i + arr[i])) {
                queue.push(i + arr[i])
                map.set(i + arr[i], true);
            }
            if (arr[i - arr[i]] && !map.has(i - arr[i])) {
                queue.push(i - arr[i])
                map.set(i - arr[i], true);
            }
        }
    }
    return false
};