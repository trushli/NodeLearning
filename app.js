var express = require("express");
var app = express();
var server = require("http");

server = server.createServer(app).listen(3000,function(){
    console.log("Listening on 3000 port.");
});
var bodyParser = require("body-parser");
let users ={user:[{userId:1,userName:"Trusha",email:"trusha.radadiya@radixweb.com",dob:"15-01-1996",gender:"female"},{userId:2,userName:"Vrunda",email:"vrunda.radadiya@radixweb.com",dob:"28-05-2002",gender:"female"}]}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/Users",function(req,res){
res.json(users);
res.end();
});

app.post("/Users",function(req,res){
    if(req.body && req.body.userName){
        users.user.push({userId:req.body.userId,userName:req.body.userName,email:req.body.email,dob:req.body.dob,gender:req.body.gender});
        //console.log(users.user);
    }
    //console.log(req.body.userName);
    res.end("added successfully.");
});

app.get("/Users/:id",function(req,res){

let b = users.user.find(b=> b.userId == req.params.id);
console.log(b);
res.send(b);
    });
    
    app.put("/Users/:id",function(req,res){
        let objIndex=users.user.findIndex(x => x.userId == req.params.id);
        users.user.splice(objIndex,1,{"userId":req.body.userId,"userName":req.body.userName,"email":req.body.email,"dob":req.body.dob,"gender":req.body.gender});
        res.end("Updated successfully.");
    });
    app.delete("/Users/:id",function(req,res){
        let objIndex=users.user.findIndex(x => x.userId == req.params.id);
        //console.log(objIndex);
        users.user.splice(objIndex,1);
        res.end("deleted successfully.");
    });
