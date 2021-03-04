// m, n represents a grid.
// Your starting point is top left of the grid.
// You can only move down or right in the grid.
// Find number of steps required to get from top left to bottom right.

// a [0, n] or [n, 0] grid is invalid since it's one dimensional therefore return 0
// in a [1, 1] grid you cant do anything therefore return 1

{
  /*
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0)return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220
*/
}

// 0(2^(n+m)) time
// 0(n + m) space

// gridTravelerMemoized
const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220

// O(m * n) time
// O(m + n) space
