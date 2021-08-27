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

// gunakan ejs

app.set('view engine', 'ejs')

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})


app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname})
    const orang = [
        {
            nama: "Muhamad Firli Ismail",
            email: "m.firliismail@gmail.com"
        },
        {
            nama: "Theo desetio",
            email: "theodesetio@gmail.com"
        },
        {
            nama: "Ilham Abdul ghoni",
            email: "mythhamzz@gmail.com"
        }
    ]
    res.render('index', { 
        nama: 'Muhamad Firli Ismail',
        orang: orang
    } )
})

app.get('/about', (req, res) => {
    

    res.render('about')
})
app.get('/contact', (req, res) => {
   

    res.render('contact')
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



