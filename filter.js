//filter method
var products = [
    {
        name:'cucumber', type: 'vegetable', quantity:0, price:1
    },
    {
        name:'banana', type: 'fruit', quantity:10, price:15
    },
    {
        name:'celery', type: 'vegetable', quantity:30, price: 9
    },
    {
        name:'orange', type: 'fruit', quantity: 3, price: 5
    }
];

var filteredProducts = [];


for (var i = 0; i < products.length; i++){
if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
    }

}
//console.log(filteredProducts);


//refactor
products.filter(function(product){
return product.type ==="fruit";
});


//Type is 'vegetable', quantity is greater than 0, price is less than 10

products.filter(function(product){
return console.log(product.type === "vegetable" 
&& product.quantity > 0 
&& product.price < 10 
&& product.name)
});

var post = {
    id:4, title: 'New Post'
};

var comments = [
    {postId:4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
];

function commentsForPost(){

    return comments.filter(function(comment){
        return comment.postId === post.id
    })
}

console.log(commentsForPost(post, comments))

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return (number > 50)
})

console.log(filteredNumbers)

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user){
       return user.admin === true;
   })

   console.log(filteredUsers)

   var numbers = [10, 20, 30];
   var lessThanFifteen = reject(numbers, function(number){
     return number > 15;
   }); 
   lessThanFifteen // [ 10 ];

   function reject(array, iteratorFunction){ 
    return array.filter(function(item) {
        return !iteratorFunction(item);
    });
  }