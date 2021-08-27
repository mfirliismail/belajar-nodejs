// const http = require('http')

// const fs = require('fs')

// const urlHTML = (path, res) => {
//     fs.readFileSync(path, (err, data) => {
//         if(err){
//             res.writeHead(404)
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }
// const server = http.createServer((req, res) => {

//     res.writeHead(200, {
//         'Content-Type' : 'text/html',
//     })

//     const url = req.url
//     if(url === './about'){
//         urlHTML('./about.html', res)
//     } else if(url === './contact'){
//         urlHTML('./contact.html', res)
//     } else {
//         urlHTML('./index.html', res)
//     }

// })

// server.listen(3000, () => {
//     console.log('listening on port 3000 .... ')
// })







// ==============================================================================


const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    // res.json({
    //     name: 'firli',
    //     umur: 19

    // })

    res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res) => {
    // res.json({
    //     name: 'firli',
    //     umur: 19

    // })

    res.sendFile('./contact.html', {root: __dirname})
})


app.get('/produk/:id/' , (req,res) => {
    res.send(`Produk ID : ${req.params.id} <br> Category ID: ${req.query.category}`)
})

app.use('/' , (req , res) => {
    res.status(404)
    res.send('404 NOT FOUND')
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}   ....`)
})



