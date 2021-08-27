// //core module
const fs = require('fs');
// // file system

// // menuliskan string  ================

// // fs.writeFileSync('data.txt', 'Hello World secara syncrounos!')

// // async =============

// // fs.writeFile('data/data.txt', 'Hello world async', (e) => {
// //     console.log(e)
// // })


// //membaca isi file sync ===========

// // const data = fs.readFileSync('data/data.txt', 'utf-8')
// // console.log(data)

// fs.readFile('data/data.txt', 'utf-8', (e, data) => {
//     if (e) {
//         return e 
//     }else {
//         console.log
//     }
// })



const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const dataQuery = () => {
    rl.question('Masukan Nama anda : ', (nama) => {
        rl.question('Masukan Umur : ' , (umur) => {
            rl.question('Masukan No. HP :', (phone) => {
                const contact = { nama, umur, phone }
    
                const file = fs.readFileSync('data/contacts.json', 'utf-8')
                const contacts = JSON.parse(file)
    
                contacts.push(contact)
    
                fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
                console.log(contacts)
    
                
    
    
                rl.close()
            })
        })
    }) 
    
}

dataQuery()
module.exports = {
    dataQuery : dataQuery
}

