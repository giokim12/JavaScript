const nums = [1, 2, 3, 4]

// const threeSquare = function (num) {
//   return num*num*num
// } 
// const newArry = nums.map(threeSquare)
// console.log(newArry)

const newArry = nums.map((num) => {
  return num*num*num
} )

console.log(newArry)