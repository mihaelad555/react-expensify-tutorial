const person ={
    name: 'Mihaela',
    age:26,
    location: {
        city:'Philadelphia',
        temp: 92
    }
};

////const {name, age} = person;
//const{city, temp} = person.location

//if we want a differit variable name:
//const {city, temp:temperature} = person.location;
//if we want to set a default variable name:
//const {name ='Anonymous', age} = person;

//if we want to set a default  and a differitvariable name:
//const {name:firstName ='Anonymous', age} = person;

//console.log(`${name} the new variable`);
//console.log(` In ${city} is ${temp}`);
//console.log(`${person.name} us ${person.age}`);

const book = {
    title:'Ego is the Enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName ='Self-Published'} = book.publisher;
console.log (`The publisher name is ${publisherName}`);


//Array destrcturing

const address = ['1299 S juniper Street', 'Philadelphia','Penn','193'];
const [street, city, state, code] = address;
//if we want only a few var:
//const [,city, state]

//if we want to set a defaul:
//const [,city, state = 'NY']
console.log (`you are in ${city} ${state}`);
const item =['coffe (hot)', '$2.00', '$2.50', '$2.70'];
const [cofee, , medium] = item;
console.log(`A medium ${cofee} costs ${medium}`);