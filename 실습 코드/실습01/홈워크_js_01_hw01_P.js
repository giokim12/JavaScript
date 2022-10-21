// 1번
const nums = [1,2,3,4,5,6,7,8]

for (const i = 0; i < nums.length; i++) {
  console.log()
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^
// i를 const로 선언했기 때문에 재할당이 불가해져서 에러가 생긴다.
// TypeError: Assignment to constant variable.

// 2번
for (num of nums) {
  console.log(num, typeof num)
}
// for in은 객체의 속성을 순회할때 사용
/*
for in 구문은 객체의 key 값에는 접근할 수 있지만, value값에는 접근하지 못한다.

*/
// for of 로 array를 순회하게 바꿔야한다


// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string
