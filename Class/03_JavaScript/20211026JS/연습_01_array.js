const classmates = ["철수", "영희", "훈이"]

classmates
// (3) ['철수', '영희', '훈이']

classmates[0]
// '철수'

classmates[1]
// '영희'

classmates.includes("훈이")                 // 배열 내부에 데이터의 유무 확인
// true

classmates.includes("맹구")
// false

classmates.push("맹구")                     // 배열 맨 마지막에 새로운 값을 추가
// 4

classmates
// (4) ['철수', '영희', '훈이', '맹구']

classmates.includes("맹구")
// true

classmates.pop()                            // 배열 맨 마지막에 존재하는 값을 제거
// '맹구'

classmates
// (3) ['철수', '영희', '훈이']

classmates.length                           // 배열의 총 길이
// 3



