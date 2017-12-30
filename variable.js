//es6

const name = 'Jane';

let title = "Software Engineer";

let hourlyWage = 40

//sometime later...

title = 'senior software engineer'

hourlyWage = 45;


function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (let i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++
        }
    }
    return number;
}

console.log(count('fkjdslafjilueoiruio'))

const myName = "vonetta";
let age = 27;
const dateOfBirth = "12/08/1990";

const statuses = [{
        code: 'OK',
        response: 'Request successful'
    },
    {
        code: 'FAILED',
        response: 'There was an error with your request'
    },
    {
        code: 'PENDING',
        response: 'Your reqeust is still pending'
    }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}

function getMessage() {
    const year = new Date().getFullYear();

    //  return "The year is " + year;
    //using a template string
    return `The year is ${year}`
}

console.log(getMessage())

//arrow functions
const add = (a, b) => a + b;

add(1, 2);

const double = number => 2 * number;

double(8)


const numbers = [1, 2, 3];

numbers.map(function (number) {
    return 2 * number;
})

numbers.map(number => 2 * number);

const team = {
    members: ["jane", "bill"],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`
        });
    }
};

console.log(team.teamSummary())

const fibonacci = nS => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const profile = {
    name: 'Alex',
    getName: function () {
        return this.name
    }
};


//objects

function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price
        }
    };

}

const inventory = [{
        title: 'harry potter',
        price: 10
    },
    {
        title: 'eloquent javascript',
        price: 15
    }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('harry potter'));


const red = '#ff0000';
const blue = '#0000ff';

const COLORS = {
    red,
    blue
};

const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}

const color = 'red';

const Car = {
    color,
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
};

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET')


function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

//createAdminUser(user);

function sum(a = 0, b = 0) {
    return a + b;
}

function addOffset(style = {}) {

    style.offset = '10px';

    return style;
}