
const fs = require('fs');

const listData = () => {
    const data = fs.readFileSync('data/contacts.json', 'utf-8')
    const dataAsli = JSON.parse(data)
    console.log(dataAsli)
}

listData()
