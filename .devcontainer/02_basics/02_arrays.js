const marvel_heros = ["thor", "iron man", "Falcon"]
const dc = ["Superman", "BAtman", "Flash"]


//marvel_heros.push(dc)

//console.log(marvel_heros[3],[1])

const all_heros = marvel_heros.concat(dc)

console.log(all_heros)

// spred operator

const all_new_heros = [...marvel_heros, ...dc]
console.log(all_new_heros)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another = another.flat(Infinity)

console.log(real_another)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))

console.log(Array.from({name: "Aditya"}))  // important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))