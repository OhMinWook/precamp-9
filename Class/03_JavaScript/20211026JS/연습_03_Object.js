const profile = {}
// undefined

const profile = {
    name : "철수",
    age : 13,
    school : "다람쥐초등학교"
}
// undefined

profile
// {name: '철수', age : 13, school : '다람쥐초등학교'}

const profile = { name : "철수", age : 13, school : "다람쥐초등학교"}
// undefined

profile.age                         // 객체의 .key를 입력해 그에 해당하는 값을 불러올 수 있다.
// 13

profile.school
// '다람쥐초등학교'