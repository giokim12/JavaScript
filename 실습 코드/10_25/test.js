// const myObj = {
//     numbers: [1],
//     myFunc() {
//         console.log(this) // myObj
//         this.numbers.forEach(function (number) {
//             console.log(number) // 1
//             console.log(this) // window
//         })
//     }
// }


const Number = function (number) {
            console.log(number) // 1
            console.log(this) // window
}

const myObj = {
    numbers: [1],
    myFunc() {
        console.log(this) // myObj
        this.numbers.forEach(Number)
    }
}