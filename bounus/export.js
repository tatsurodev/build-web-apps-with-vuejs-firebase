// 1つのみexportする、default exportはimportするときimportするものが1つしか存在しないのでimportするものを指定しなくて良い
// export default 'hello'

// exportするものはどんな形式でもおｋ
// export default {
//     name: 'mario',
//     age: 32
// }

// 複数のものをexportするには、named exportを使う。importするときは{}で囲ってimportするものを指定
// var name = 'luigi'
// var age = 30
// var favColour = 'green'

// export { name, age, favColour }