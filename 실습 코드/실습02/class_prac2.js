class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`내 이름은 ${this.name} 이다.`)
  }
}
const p = new Person('David', 35)
// new 연산자는 새로운 객체 만든다
// person 기반으로

class MBTI extends Person {

}

class MB_TI extends Person {
  constructor(p_name, p_age, p_mbti) {
    super(p_name, p_age)
    this.mbti = p_mbti
  }
  tell_mbti() {
    console.log(`내mbti는 ${this}`)
  }
}

const temp = new MBTI('mbti', 10)
console.log(temp.name)
console.log(temp.age)
temp.speak()
const tmp = new MB_TI('mbbti', 11, 'esfj')
