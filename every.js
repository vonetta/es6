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

Field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new Field("2Cool");
var password = new Field("my_password");

var birthday = new Field("10/01/2010");

console.log(username.validate() && password.validate());


//refactor

var fields = [username, password, birthday];
var formIsValid = fields.every(function(field){
    return field.validate();
});

if (formIsValid){
    //allow user to submit
}
else{
    //show an error message
}

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted = users.every(function(user){
      return user.hasSubmitted === true;
  });

  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(request){
 return request.status === 'pending'
  });

  console.log(inProgress)