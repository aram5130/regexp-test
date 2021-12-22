const str = `
010-1234-5678
thesecon@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
aabbbccdddd
`

// ##생성자
//const regxp = new RegExp('the','gi')
// ##리터럴
// const regxp = /the/gi  
// console.log(str.match(regxp))

// ##메소드
// const regxp = /fox/gi
// // console.log(regxp.test(str))
// console.log(str.replace(regxp, 'AAA'))
// console.log(str)

//const 를 let으로 바꾸어 재할당하면 원본데이터 수정 가능
// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://google.com
// The quick brown fox jumps over the lazy dog.
// aabbbccdddd
// `
// str = str.replace(regxp, 'AAA')
// console.log(str)


// ##플래그
// const regxp = /the/gi
// console.log(str.match(regxp))
// // ㄴ(3) ['the', 'The', 'the']

// // 정규 표현식에 리터럴을 넣어도 사용 가능
// const regxp = 
// console.log(str.match(/the/gi))

// console.log(str.match(/\.$/gim))

// ##패턴
// console.log(
//   str.match(/d$/gm))
// console.log(
//   str.match(/^t/gim))
// console.log(
//   str.match(/http/g))

  // g플래그를 쓰지 않으면, 둘중에 먼저 찾는 대상(fox)을 찾고 뒤로 기본적인 내용이 나옴  
// console.log(
//   str.match(/fox|dog/g))
// console.log(
//   str.match(/https?/g))

// console.log(
//   str.match(/\b\w{2,3}\b/g))
//  \b \b 를 넣어서 2개 이상 3개 이하인 단어를 찾을 수 있다.


// console.log(
//   str.match(/[fox]/g)
// )
// console.log(
//   str.match(/[0-9]/g)
// )
// console.log(
//   str.match(/[0-9]{1,}/g)
// )
// console.log(
//   str.match(/[가-힣]{1,}/g)
// )  

// console.log(   
//   str.match(/\w/g)
//  )  
//  console.log(   
//   str.match(/\bf\w{1,}\b/g)
//  )  
//  console.log(   
//   str.match(/\d{1,}/g)
//  ) 
//  console.log(   
//   str.match(/\s/g)
//  )

console.log(
  str.match(/.{1,}(?=@)/g) //@앞에 \를 넣지 않아도 됨.
)
console.log(
  str.match(/(?<=@).{1,}/g) //@앞에 \를 넣지 않아도 됨.
)