
//es6

const name = 'Jane';

let title = "Software Engineer";

let hourlyWage = 40

//sometime later...

title = 'senior software engineer'

hourlyWage = 45;


function count (targetString){
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for(let i = 0; i < targetString.length; i++){
        if(characters.includes(targetString[i])){
            number++
        }
    }
    return number;
}

console.log(count('fkjdslafjilueoiruio'))

const myName ="vonetta";
let age = 27;
const dateOfBirth = "12/08/1990";

const statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];
  let message = '';
  const currentCode = 'OK';
  
  for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
  }

  function getMessage(){
      const year = new Date().getFullYear();

    //  return "The year is " + year;

      return `The year is ${year}`
  }

  console.log(getMessage())