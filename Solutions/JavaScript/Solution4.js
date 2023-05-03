/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;
  let buy = prices[0], profit = 0;
  for (let i = 1; i< prices.length; ++i) {
    if (buy > prices[i]) {
      buy = prices[i]
    } else {
      profit = Math.max(profit, prices[i] - buy)
    }
  }
  return profit;
};