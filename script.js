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