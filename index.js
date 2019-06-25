const moduleStuff = require('./anime.module');
const characterList = moduleStuff.characters;

moduleStuff.hello('Playfair');

for (character of characterList){
    console.log(`${character.name} is from ${character.show}`);
    
}

