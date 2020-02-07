/**
 * Given a non-empty array of integers, every element appears three   * times except for one, which appears exactly once. Find that single * one.
 */

const data = [3,1,3,1,3,1,24,24,24,99];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0, twos = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    return ones;

};

console.log(singleNumber(data));

