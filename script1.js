var info = [
    {
        "name": "priya",
        "age": "27",
        "gender": "female",
        "occupation": "freelancer",
        "contact": "12345"
    },
    {
        "name": "sham",
        "age": "20",
        "gender": "male",
        "occupation": "staff",
        "contact": "23456"
    },
    {
        "name": "pavi",
        "age": "25",
        "gender": "female",
        "occupation": "engineer",
        "contact": "34567"
    }
];

//for loop
for (var i = 0; i < info.length; i++) {
    console.log(info);
    console.log(info[i].name, info[i].age, info[i].gender, info[i].occupation, info[i].contact);
}
//for in loop
for (var i in info) {
    console.log(info);
    console.log(i, info);
    console.log(info[i].name, info[i].age, info[i].gender, info[i].occupation, info[i].contact);
}

//for of loop
/* for (var ele of info) {
    console.log(info);
    console.log(ele, info);
    console.log(info[ele].name, info[ele].age, info[ele].gender, info[ele].occupation, info[ele].contact);
} */
//forEach loop
info.forEach(function (person) {
    console.log(person);
    console.log(person.name, person.age, person.gender, person.occupation, person.contact);
})



var bussiness = {
    "name": "krishpicrafting",
    "type": "handmade gifts",
    "year": "2019",
    "price": "1000",
    "time": "5 days",
    "mode": "online",
    "contact": "9876543210",
    "plcae": "hosur"
};

//for loop

for (var i = 0; i < bussiness.length; i++) {
    console.log(i);
};

//for in loop

for (var i in bussiness) {
    console.log(i, bussiness[i]);
}
//for of for each
