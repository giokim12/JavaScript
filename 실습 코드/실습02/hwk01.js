// for i in range(5):
//     for j in range(9):
//         if i+j>=4 and j-i<=4:
//             print('*', end = '')
//         else:
//             print(' ', end='')
//     print()

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 9; i++) {
//     if (i+j>=4 && j-i<=4) {
//       console.write('*')
//     } else {
//       console.write(' ')
//     }
//   }
// }

let blank = '    '
let star = '*'
for (let i = 0; i < 5; i++) {
  if (i === 0 ) {
  } else {
    blank = blank.slice(0,-1)
    star += '**'
  }
  console.log(blank+star)
}


// 정답코드1

let line = 5;
let result = "";

for (let i = 1; i < line*2; i+=2) {
  for (let j = 1; j < ((line * 2) - i) / 2 ; j++) {
    result += " ";
  }
  for( let l=1; l<=i;l++){
    result += "*";
  }
  for (let k = 1; k < ((line * 2) - i) / 2; k++) {
    result += " ";
  }
  result += "\n";
}
console.log(result);

// 정답코드2
for(let i = 1; i <= 9; i+=2 ){  
  console.log(' '.repeat( (9-i)/2 ) + '*'.repeat(i))
}