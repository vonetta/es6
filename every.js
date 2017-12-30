//every

var computers = [
    { name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
    var computer = computers[i];

    if(computer.ram < 16){
        allComputersCanRunProgram = false;
    }
    else{
        onlySomeComputersCanRunProgram = true;
    }
}

//console.log(allComputersCanRunProgram)
//console.log(onlySomeComputersCanRunProgram)


computers.every(function(computer){
    return console.log(computer.ram > 16);
});

//some

computers.some(function(computer){
    return computers.ram > 16;
});

var names = ['Alexandria', 'matthew', 'joe'];

names.every(function(name){
    return console.log(name.length > 4);
})

names.some(function(name){
    return console.log(name.length > 4);
})

function Field(value){
    this.value = value;
}

var username = new Field("2Cool");
var password = new Field("my_password");
