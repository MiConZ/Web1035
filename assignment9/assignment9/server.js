const fs = require('fs/promises');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

// complete the code here
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const data 
    res.write(`<pre >${JSON.stringify(data, null, 2)}</pre>`); 
    
  });

// complete the code here
const readJsonFile = () => {
    
}

// complete the code here
// จำนวนเสื้อผ้าตามที่กำหนด
const editJsonFile = (data) => { 
    const n_stock = [12, 13, 50, 22, 55, 87, 12, 29, 10]

}

// complete the code here
const writeJsonFile = (data) =>{
    
}

// complete the code here
const main = async () => {

    
}

server.listen(port, hostname, () => {
    console.log(`Server running at   http://${hostname}:${port}/`);
});