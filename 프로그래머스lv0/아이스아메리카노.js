function solution(money) {
    var answer = [];
    const amer = parseInt(money/5500)
    const change = money%5500
    answer = [amer, change]
    return answer;
}