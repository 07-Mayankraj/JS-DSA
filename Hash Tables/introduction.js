/* 

Hash tables 
Maps
Hash Maps 
unordered Maps
objects
dictionires

key => hash funtion => hash something and map into the memory address.

Key              values
basket.grapes = 10000;


Hash funtion =>
we gave input Hash function generates random patterns
and pattern are one way.
and it is called "Idempotent"
faster in data access.

in arrays has ordered indexes ; in hash maps we gave it a key and access exact where the item is.

Disadvantages :



*/

//this is a Object          key : value,

let hero = {

    age: 54,
    name: 'thor',
    power: 'god of thundre',
    weapon: () => {
        console.log("Strombreaker and Myonear");
    }
}


console.log(hero);

hero.sonOf = 'odin';
hero.from= 'assguard';

hero.weapon();
