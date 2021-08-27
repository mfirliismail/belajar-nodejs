const fs = require('fs')
const http = require('http')

const urlHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404)
            res.write('Error file not found')
        } else {
            res.write(data)
        }
        res.end()
    })
}
const server = http.createServer((req, res) => {
    


    res.writeHead(200, {
        'Content-Type' : 'text/html',
    })

    const url = req.url
    if(url === '/about'){
        urlHTML('./about.html', res)
    } else if(url === '/contacts'){
        urlHTML('./contact.html', res)
    } else {
        urlHTML('./index.html', res)
        
      
    }

    
})

server.listen(3000, () => [
    console.log('listening on port 3000')
])