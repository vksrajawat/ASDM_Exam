var express=require('express')
var app=express();

var employeeInfo=function(req,resp)
{
	var dataOfEmployees=[
		{
			empId:101, Name:'Ajay Padole', City:'pune', EmpType:'Salesman'
			
		},
		{
			empId:102, Name:'Aditya Suryavanshi', City:'Mumbai', EmpType:'Manager'
			
		},
		{
			empId:103, Name:'Akash Shinde', City:'pune', EmpType:'developer'
			
		},
	];
	resp.send(dataOfEmployees)
};

app.get('/employeeInfo',employeeInfo );
var server = app.listen(4000, function () {
var host = server.address().address
var port = server.address().port
console.log("WebApp app listening at http://localhost:5500", host, port)
})