var numbers = [10, 20, 30];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[1]
}

//reduce refactor
numbers.reduce(function (sum, number) {
    return sum + number
}, 0);

//harder example
var primaryColors = [{
        color: 'red'
    },
    {
        color: 'yellow'
    },
    {
        color: 'blue'
    }
];

var newColor = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(newColor);

// is this balanced or not

function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if(previous < 0) {return previous;}
        if(char === "(") {return ++previous;}
        if(char === ")") {return --previous;}
        return previous
    }, 0);
}

console.log(balancedParens("((())))"))

var trips = [{distance: 34}, {distance:12}, {distance: 1}];

var totalDistance = trips.reduce(function(sum , trip){
return sum += trip.distance
},0)
console.log(totalDistance)

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous, desk) {
      if(desk.type == 'sitting'){ ++previous.sitting}
      else{ ++previous.standing}
      return previous
  }, { sitting: 0, standing: 0 });

console.log(deskTypes);

var numbers = [1,1,2,3,4,4]

function unique(array){
array.reduce(function(previous, elem){
    if(previous.find(function(p){
        return p === previous.push(arrElem)
    }))
}, [])
}

function unique(array) {
    return array.reduce((previous, arrElem) => {
        if(!previous.find((p) => { return p===arrElem; })) {
            previous.push(arrElem);
        }
        return previous;
    }, []);
}


console.log(unique)