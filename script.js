// for each

//create an array of numbers
var numbers = [1,2,3,4,5];
//create a variable to hold the sum
var sum =0;

function adder (number){
sum+=number;
}
//loop over the array, incrementing the sum variable
numbers.forEach(adder);
//print the sum variable
document.write(`Sum of the array using a forEach ${sum}`);

//refactor a original problem

function handlePost(){
var posts = [
    {
        id: 23, title: 'Daily JS News'
    },
    {
        id: 52, title: 'Code Refactor City'
    },
    {
        id: 105, title: 'The Brightest Ruby'
    }
];

// for(var i = 0; i < posts.length; i++){
//     console.log(savePost(posts[i]))
// }

savePost = [];
function loopPost (post) {
console.log(savePost(post))
};

posts.forEach(loopPost);

};


var images = [
    {
        height: 10, width: 30
    },
    {
        height: 20, width: 90
    },
    {
        height:54, width: 32
    }
];

var areas = [];

function calcArea (image){
areas.push(image.height * image.width)
}

images.forEach(calcArea);

document.write(`<br>Calculating the areas for the images ${areas}`)

//map

var numbers = [1,2,3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++){
doubledNumbers.push(numbers[1] * 2);
}

var doubled = numbers.map(function(number){
    return number * 2;
});

doubled;
doubledNumbers;

var cars = [
    {
        model: 'Buick',
        price: 'Cheap'
    },
    {
        model: 'Camaro',
        price: 'expensive'
    }
];

var prices = cars.map(function(car){
return car.price;
})

console.log(prices);

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(image){
      return image.height;
  });

  console.log(heights);

  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(function(trip){
      return trip.distance/ trip.time
  });

  console.log(speeds);

  var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];


  function pluck(array, property){

    return paint['color']
}

var values = paints.map(pluck)

  pluck(paints, 'color');

  var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
  
function pluck(array, property) {
    
var values = paints.map(function(paint){
    return paint['color']
})
return values;
}

 var result = pluck(paints, 'color');

