import http from 'http' 
import fs from 'fs'
const data = fs.readFileSync("./Page_not_found.html", "utf8");
const config = JSON.stringify(fs.readFileSync("./config.json", "utf8"));

const server = http.createServer((req, res) => {
    // res.end("Welcome from server")
     
    if(req.url==="/"){
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end("Home Page")
    } else if (req.url==="/contact"){
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end("Contact Page")
    } else if (req.url==="/projects"){
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end(JSON.stringify(config))
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        })
        res.end(data)
    }
    
})
server.listen(3000,() => {
    console.log("Server is Running....");
})