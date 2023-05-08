//for in loop
var bussiness={
    "name":"krishpicrafting",
    "type":"handmade gifts",
    "year":"2019",
    "price":"1000",
    "time":"5 days",
    "mode":"online",
    "contact":"9876543210",
    "plcae":"hosur"
};
for(var i in bussiness){
    console.log(i,bussiness[i]);
}

//for loop
var info=[{"name":"priya","age":"27","gender":"femele","occupation":"freelancer","contact":"12345"},
{"name":"sham","age":"20","gender":"mele","occupation":"staff","contact":"23456"},
{"name":"pavi","age":"25","gender":"femele","occupation":"engineer","contact":"34567"}];
for(var i = 0; i<info.length; i++){
    console.log(info[i].name,info[i].age,info[i].gender,info[i].occupation,info[i].contact);
}
