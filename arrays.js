// 1. npm install -g nodemon
// 2. open terminal and execute: `nodemon arrays.js`

// Data //
const characters = [
  {
    id: 1,
    name: 'Sabrina',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'female',
  },
  {
    id: 2,
    name: 'Haleana',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'female',
  },
  {
    id: 3,
    name: 'Renata',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    id: 4,
    name: 'Miranda',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'female',
  },
  {
    id: 5,
    name: 'Randyll',
    height: 188,
    mass: 84,
    eye_color: 'black',
    gender: 'male',
  },
  {
    id: 6,
    name: 'Strong',
    height: 198,
    mass: 89,
    eye_color: 'brown',
    gender: 'male',
  },
]

// Helper function for printing //
const printInConsole = (data) => {
  console.log(data)
}

//******************************************************//
//**************************MAP*************************//
//******************************************************//

// 1. Get array of all names
const charactersNames = characters.map((characters) => characters.names)

//printInConsole(charactersNames);

// 2. Get array of all heights
const charactersHeight = characters.map((characters) => characters.height)

//printInConsole(charactersHeight);

// 3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((characters) => ({
  name: characters.name,
  height: characters.height,
}))

//printInConsole(minifiedRecords);

// 4. Get array of all first names
const firstNames = characters.map((characters) => characters.name)

//printInConsole(firstNames);

//******************************************************//
//************************REDUCE************************//
//******************************************************//

// 1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)

//printInConsole(totalMass)

// 2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)

//printInConsole(totalHeight)

// 3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color
  if (acc[color]) {
    acc[color]++
  } else {
    acc[color] = 1
  }
  return acc
}, {})

//printInConsole(charactersByEyeColor)

// 4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
)

printInConsole(totalNameCharacters)

//******************************************************//
//************************FILTER************************//
//******************************************************//

// 1. Get characters with mass greater than 100
const greater100Characters = characters.filter(
  (characters) => characters.mass > 100
)

//printInConsole(greater100Characters);

// 2. Get characters with height less than 200~
const shorterCharacters = characters.filter(
  (characters) => characters.mass < 200
)

//printInConsole(shorterCharacters);

// 3. Get all male characters
const maleCharacters = characters.filter(
  (characters) => characters.gender === 'male'
)

//printInConsole(maleCharacters);

// 4. Get all female characters
const femaleCharacters = characters.filter(
  (characters) => characters.gender === 'female'
)

//printInConsole(femaleCharacters);

//******************************************************//
//*************************SORT*************************//
//******************************************************//

//1. Sort by mass
const byMass = characters.sort((a, b) => b.mass - a.mass)

//printInConsole(byMass)

//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height)

//printInConsole(byHeight);

//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1
  return 1
})

//printInConsole(byName)

//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === 'female') return -1
  return 1
})

//printInConsole(byGender)

//******************************************************//
//*************************EVERY************************//
//******************************************************//

// 1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (characters) => characters.eye_color === 'blue'
)

//printInConsole(allBlueEyes)

// 2. Does every character have mass more than 40?
const allMassGreaterThan40 = characters.every(
  (characters) => 40 < characters.mass
)

//printInConsole(allMassGreaterThan40)

// 3. Is every character shorter than 200?
const allShorterThan200 = characters.every(
  (characters) => 200 < characters.height
)

//printInConsole(allShorterThan200)

// 4. Is every character male?
const allMale = characters.every((characters) => characters.gender === 'male')

//printInConsole(allMale)

//******************************************************//
//*************************SOME*************************//
//******************************************************//

// 1. Is there at least one male character?
const isOneMaleCharacter = characters.some(
  (character) => character.gender === 'male'
)

//printInConsole(isOneMaleCharacter);

// 2. Is there at least one character with blue eyes?
const isBlueEyesCharacters = characters.some(
  (character) => character.eye_color === 'blue'
)

//printInConsole(isBlueEyesCharacters);

// 3. Is there at least one character taller than 210?
const oneTaller2010 = characters.some((character) => character.height > 210)

//printInConsole(oneTaller2010);

// 4. Is there at least one character that has mass less than 50?
const oneMassLesssThan50 = characters.some((character) => character.mass < 150)

//printInConsole(oneMassLesssThan50);
