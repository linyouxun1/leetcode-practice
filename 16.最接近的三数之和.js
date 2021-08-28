/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((i, i2) => i - i2);
  var result = Number.MAX_VALUE;
  for (var i = 0; i < nums.length - 2; i++) {
    var j = i + 1,
      k = nums.length - 1;
  }
};
// @lc code=end
