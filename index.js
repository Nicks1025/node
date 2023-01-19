// creating http server


// const http = require("http");

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type' : 'text/plain'})
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type','text/plain');
//     res.write('Welcome ');
//     res.end("Welcome to HTTP server");
// })

// server.listen(port,hostname,() => {
//     console.log(`Server running at https://${hostname}:${port}/`);
// })




// making a http request

// const http = require("http");
// http.get("http://api.open-notify.org/astros.json", (res) => {
//     let info = '';
//     res.on('data',(chunk) => {
//         info += chunk;
//     })

//     res.on('end',() => {
//         let jsondata = JSON.parse(info);
//         console.log(jsondata);
//     })
// })


// making a http post request

// const http = require("https");

// // const data = JSON.stringify({
// //     name:"Nikhil",
// //     job : "Programmer Analyst"
// // });


// const options = {
//     hostname:'reqres.in',
//     path : '/api/users',
//     method : 'POST',
//     header : {
//         'Content-Type' : 'text/plain'
//     }
// }
// // request
// const req = http.request(options,(res) => {
//     let body = '';
//     console.log('Status Code',res.statusCode);

//     res.on('data',(chunk) => {
//         body += chunk;
//     })

//     res.on('end', () => {
//         console.log("Body : ",JSON.parse(body));
//     })
// })

// // req.write(data);
// req.end();


//making a post request

// const axios = require('axios');

// const info = JSON.stringify({
//     name : "Nikhil Sahu",
//     job : "Programmer Analyst"
// });

// const info = "hey this is Nihkil";

// // const options = {
//     // hostname : 'reqres.in',
//     // path : '/api/users',
//     // method : 'POST',
//     // header : {
//     //     'Content-Type' : 'application.json'
//     // }
// // };

// axios is used to make http request

// axios.post("https://reqres.in/api/users",info).then((res) => {
//     console.log(`Status Code : ${res.status}`);
//     console.log(`Body : ${JSON.stringify(res.data)}`);
// }).catch((err) => {
//     console.log(err);
// })











// promises

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("hey"), 1000)
// });

// promise.then(
//     result => {
//         console.log(result)
//     },
//     error => console.log("rejected")
//     )
//     .catch(err => console.log(err))
// getAfter()
    
// function getAfter(){
//     console.log("print after")
// }


// function Clown(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Hey");
//         },2000)
//     })
// }

// async function msg(callback) {
//     const msg = await Clown()
//     console.log("Message : ",msg);
//     callback()
// }

// msg(getAfter)



// async and await are used with Promise, await inform async
// function hello(){
//         return new Promise(resolve => (
//             setTimeout(() => {
//                 resolve("hey")
//             },2000)
            
//         ))
// }

// async function msg(){
//     const msg =await hello();
//     console.log("Message : ",msg);
//     console.log("hello")
// }
// msg();


// async function myFunction(){
//     return "hey"
// }

// myFunction().then(
//     (result) => console.log(result),
//     (error) => console.log("error created")
// )



// let promise = new Promise(function(resolve) {
//     setTimeout(() => resolve("I Love You"),3000)
// });

// async function myDisplay() {
//     console.log(await promise)
//     console.log("waiting")
// }

// myDisplay();




// function promise(){
//     setTimeout(()=>{
//         console.log("hey")
//     },2000)
// }
// async function myDisplay() {
//     await promise()
//     console.log("waiting")
// }

// myDisplay();


















// working with files

// const fs = require('fs');

// //Asynchronous fs module
// fs.readFile("test.txt","utf8",(err,data)=> {
//     if(err) throw err;
//     console.log(data);
// });


// // //synchronous module
// // const data = fs.readFileSync("test.txt",{encoding : "utf8",flag : 'r'})
// // console.log(data);


// The fs.stat() method is used to return information about the given file or directory. It returns an fs
// .Stat object which has several properties and methods to get details about the file or directory.

// fs.stat("test.txt",(err,stat) => {
//     if(err){
//         console.error(err);
//         return
//     }

//     console.log(stat.isFile());
//     console.log(stat.isDirectory());
//     console.log(stat.isSymbolicLink());
//     console.log(stat.size);
// })




// update files

// const fs = require("fs");

// const content = [{
//     type : "Node Application"
// }]

// // synchronous
// fs.writeFileSync("test.json",JSON.stringify(content));

// asynchronous

// const fs = require("fs");

// const content = "Node Application";

// fs.writeFile("texts.txt",content,{flag:"a+"},()=>{

//     console.log("Successfully done");
// });

// fs.unlink('test.json',(err)=>{
//     console.log("File removed");
// })




// Routing

// const http = require("http");

// function index(request, response) {
//     response.writeHead(200,{'Content-Type' : 'text/plain'});
//     response.end("Node Routing");
// }

// function aboutus(request, response) {
//     response.end("This is About Page");
// }

// const server = http.createServer((req,res)=> {
//     if(req.url == '/'){
//         return index(req,res);
//     }

//     if(req.url == '/aboutus') {
//         return aboutus(req,res);
//     }
// })
// server.listen(8000,"","server is starting on port 8000");

//rounting another way
// const http = require("http");

// const routes = {
//     "/" : function index(request, response) {
//         response.writeHead(200,{'Content-Type' : 'text/plain'})
//         response.end("Node Routing")
//     },
//     "/aboutus" : function aboutus(request, response) {
//         response.end("This is About Page")
//     }
// }


// const server = http.createServer((req, res)=> {
//     if(req.url in routes) {
//         return routes[req.url](req,res);
//     }
// })

// server.listen(process.env.PORT ||7000,"","Server started on port 7000");





// // path module

// const path = require("path");

// file = path.resolve("node tutorial/test.json");

// console.log(file)





// Event Modules

// const events = require("events");

// let ev = new events.EventEmitter();

// // ev.on("my_event",(data) => {
// //     console.log("Event : ",data);
// // })
// var c1 = (code, msg) =>console.log(`Got ${code} and ${msg}`);

// ev.once('eventOnce',c1)

// ev.off('eventOnce',c1);     //used to unregister an event

// ev.emit("eventOnce", 300, 'ok');







// Streams

// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req,res)=> {
//     fs.readFile("test.json",(err,data) => {
//         res.write("Hey")
//         res.end(data);
//     })
// })
// server.listen(3000, ()=>console.log("Server started on port 6000"));








// another way using stream

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) => {
//     const stream = fs.createReadStream("text.json");
//     stream.pipe(res);
// })

// server.listen(3000,()=>"Server started on port 3000");






// Buffer

// const buffer = Buffer.from("Hey");
// const buf = Buffer.alloc(4);
// console.log(buf);
// buf.write("hello")
// console.log(buf.toString());

// buf[0] = "A";  //no change
// buf[0] = 65     //changes character at 0 to A

// console.log(buf.toString())







// Exception Handling

// try{
//     console.log("Start try")
//     throw new Error("error")
//     // a;
// }
// catch(err) {
//     console.log("error message",err);
// }



// using promises

// doSomething1()
// .then(()=>{
//     return doSomething2().catch(err => {
//         throw err
//     })
// })
// .then(() => {
//     return doSomething2().catch(err => {
//         throw err
//     })
// })
// .catch(console.log(err))




// using sync await function

// async function someFunction() {
//     try{
//         await someOtherFunction()
//     }
//     catch(err) {
//         console.log(err.message)
//     }
// }

