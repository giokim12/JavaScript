// 방법 1
function palindrome(str) {
  // 문자열은 reverse 함수가 없다
  // 문자열>>배열>>뒤집기>>문자열
  const reversed = str.split('').reverse().join('');
  return reversed === str ? true : false
}

console.log(palindrome('level'))
console.log(palindrome('hi'))


// 방법 2
function palindrome(str) {
  return str.split('').every((element, idx) => element === str[str.length - 1 - idx])
}

palindrome('level')
palindrome('hi')