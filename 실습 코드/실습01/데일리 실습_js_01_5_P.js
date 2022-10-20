const participantNums =  [[1, 3, 2, 2, 1], 
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]



const kkak = (people) => {
  const arr = new Array(101).fill(0)
  // console.log(arr)
  // console.log(arr.length)
  // console.log(people)
  for (let i = 0; i < people.length; i++) {
    // 배열 하나씩 다 버켓에 넣기
    // arr[people[i]] += 1
    arr[people[i]] += 1
  // console.log(arr)
  // console.log(arr.length)
  }
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    // 배열 하나씩 다 버켓에 넣기
    // arr[people[i]] += 1
    if (arr[i] === 1) {
      console.log(i)
    }
  // console.log(arr)
  // console.log(arr.length)
  }

}

for (let i = 0; i < participantNums.length; i++) {
  console.log(`${i+1}번째 게임`)
  // playGame(p1[i], p2[i])
  kkak(participantNums[i])
  console.log('---------------------------')
}

// 3
// 100
// 62