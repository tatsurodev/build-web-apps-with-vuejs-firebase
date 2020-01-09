var axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err)
})