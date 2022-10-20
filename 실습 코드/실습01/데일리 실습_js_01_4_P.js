const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
  switch (p1_choice) {
    case 'rock' : 
      switch (p2_choice) {
        case 'rock' : 
          break
        case 'scissors' : 
          break
        case 'paper' : 
          break
      }
      break
    case 'scissors' : 
      switch (p2_choice) {
        case 'rock' : 
          break
        case 'scissors' : 
          break
        case 'paper' : 
          break
      }
      break
    case 'paper' : 
      switch (p2_choice) {
        case 'rock' : 
          break
        case 'scissors' : 
          break
        case 'paper' : 
          break
      }
      break
  }
}



for (let i = 0; i < 10; i++) {
  console.log(`${i+1}번째 게임`)

}
// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2