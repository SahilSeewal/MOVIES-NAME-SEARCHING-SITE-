/*var request1=require("request")
request1("https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22",function(error,response,body){
if(error){
    console.log("errnor occured is "+error)
}
else{
    if(response.statusCode==200){

        console.log("code is without error  "+body)
    }}
})*/

console.log("**********************")

/*
var request1=require("request")
request1("http://www.omdbapi.com/?i=tt3896198&apikey=thewdb",function(error,response,body){
if(!error && response.statusCode==200)    
{var p=JSON.parse(body)
    console.log(p)}
})*/

console.log("*******************")

/*var t=require("express")
var y=t()
var p1
var request1 = require("request")
//y.set("view engine","ejs")
y.get("/p",function(req,res){
   // res.render("app1")
request1("http://www.omdbapi.com/?apikey=9bc5e7c0&s=star",function(error,response,body){
if(!error && response.statusCode ==200)    
{ p1=JSON.parse(body)
   res.send(p1["Search"][0])} 
})
})
y.listen(3000,function(){
    console.log("started")
})*/

console.log("**************************")

/*var t= require("express")
var y=t()
y.set("view engine","ejs")
var request1= require("request")
y.get("/p",function(req,res){
request1("http://www.omdbapi.com/?apikey=9bc5e7c0&s=star",function(error,response,body){
 if(!error && response.statusCode==200)
{var b=JSON.parse(body)
    res.render("app1",{data:b["Search"]})}
})
})
y.listen(3000,function(){
    console.log("started")
})*/


console.log("*******************")
var t=require("express")
var y=t()
var bodyParser=require("body-parser")
var request1=require("request")
y.set("view engine","ejs")
y.use(bodyParser.urlencoded({extended:true}))
y.get("/p",function(req,res){
var search1=req.query.search
    var url="http://www.omdbapi.com/?apikey=9bc5e7c0&s="+ search1
    request1(url,function(error,response,body){
if(!error && response.statusCode==200)
        {var p1=JSON.parse(body)
res.render("app1",{data:p1["Search"]})}
})
})
y.get("/",function(req,res){
    res.render("app2")
})
y.listen(3000,function(){
    console.log("started")
})