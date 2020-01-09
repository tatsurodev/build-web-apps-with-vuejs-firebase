// 関数式、ホイスティング(巻き上げ)無し、
const greetOne = function (name) {
    console.log('hello ' + name)
}

// arrow function
const greetTwo = (name) => {
    console.log('hello ' + name)
}

// 引数一つなら括弧不要
const greetThree = name => {
    console.log('hello ' + name)
}

// 引数複数なら括弧必須
const greetFour = (name, age) => {
    console.log('hello ' + name + '. I am ' + age)
}

// 処理が1行なら波括弧不要
const greetFive = name => console.log('hello ' + name)

greetOne('mario')
greetTwo('yoshi')
greetThree('luigi')
greetFour('peach', 22)
greetFive('mashroom')