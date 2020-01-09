var users = [
    { name: 'mario', premium: true },
    { name: 'yoshi', premium: true },
    { name: 'toad', premium: false },
    { name: 'bowser', premium: false },
]

// return trueは残す、return falseは削除で、非破壊的な写像
var newUsers = users.filter((item) => {
    return !item.premium
})
console.log(users)
console.log(newUsers)