for(let i = 0; i < 3; i = i+1) {
    console.log("안녕하세요!!!")
}

// 3VM291:2 안녕하세요!!!
// undefined

const calssmates = ["철수", "영희", "훈이"]
// undefined

const classmates = ["철수", "영희", "훈이"]
// undefined

classmates
// (3) ['철수', '영희', '훈이']

classmates[0]
// '철수'

classmates[1]
// '영희'

classmates[2]
// '훈이'

for(let i = 0; i < classmates.length; i++) {
    console.log(classmates[i])
}
// VM690:2 철수
// VM690:2 영희
// VM690:2 훈이
// undefined

for(let i = 0; i < 3; i++) {
    console.log(classmates[i] + "입니다!!")
}
// // VM726:2 철수입니다!!
// // VM726:2 영희입니다!!
// // VM726:2 훈이입니다!!
// undefined

const classmates2 = [
    { name: "철수", age: 10, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" }
]
// undefined

classmates2[0].school
// '다람쥐초등학교'