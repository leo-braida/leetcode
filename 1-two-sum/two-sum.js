/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const response = [];

    const pairs = new Map();
    nums.some((num, index) => {
        const complement = target - num;
        if(pairs.has(complement)) {
            response.push(pairs.get(complement), index);
            return true;
        }
        pairs.set(num, index);
    })

    return response;
}
