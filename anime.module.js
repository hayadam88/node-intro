const characters = [

    {
        name: "Spike",
        show: "Cowboby Bebop",
    },
    {
        name: "L",
        show: "Death Note",
    },
    {
        name: "Goku",
        show: "DBZ",
    },
    {
        name: "Gon",
        show: "Hunter X Hunter",
    }
];

function sayHello(name){
    console.log(`hello ${name}`);
    
}
let something = 'blah';
module.exports = {
    characters: characters,
    something: something,
    hello: sayHello,
}


