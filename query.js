var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'}
];

var user;

for(var i = 0; i < users.length; i++){
if(users[i].name === 'Alex'){
    user = users[i]
}

}

user;

users.find(function(user){

    return user.name === 'Alex'
})

function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

cars.find(function(car){
    return car.model === 'Focus'
})

var posts = [
{id:1, title: 'New Post'},
{id: 2, title: 'Old Post'}
];

var comment = {
    postId : 1, content: 'Great Post'
};

function postForComment(posts, comment){
return posts.find(function(post){
    return post.id === comment.postId;
});
}

postForComment(posts, comment)


var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin = users.find(function(user){
      return user.admin === true
  });

  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account = accounts.find(function(account){
return account.balance === 12

  });