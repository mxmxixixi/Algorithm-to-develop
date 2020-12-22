/**
 * 时间复杂度为O(n)，因为每个元素遍历了一次，n为元素的个数
 * 空间复杂度为O(k)，k为过程中队列的最大元素个数。
 */
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    const queue = [id];
    let important = 0, queueLength = queue.length;
    while (queue.length > 0) {
        queueLength = queue.length
        while (queueLength--) {
            const id = queue.shift()
            employees.forEach((v) => {
                if (v.id === id) {
                    important += v.importance
                    queue.push(...v.subordinates)
                    return
                }
            })
        }
    }
    return important
};