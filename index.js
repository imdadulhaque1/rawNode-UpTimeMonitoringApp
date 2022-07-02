/*
#
# Title: UpTime Monitoring Application
# Author: Imdadul Haque
# Date: 29/06/2022
#
*/

//TODO:==> Required Dependencies
const http = require('http');

//TODO:==> Object Module Scaffolding
const app= {}

//TODO: Configur the app
app.config = {
    port: 3000
}

//TODO:==> define the Server to Run
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`Listening PORT ${app.config.port}`);
    })
} 

//TODO:==> Handle the Request Response
app.handleReqRes = (req, res) =>{
    //?==> Handle the Response
    res.end("Hello SuperStar!");
}

app.createServer();
