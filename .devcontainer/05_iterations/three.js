// for of loop

const arr = [1,2,3,4]

for (const i of arr) {
    //console.log(i);
    
}

const greetings = "hello world!"
for(const greet of greetings){
    console.log(`Each character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states")
map.set('FR', "France")

console.log(map)

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

for (const key in map) {
    console.log(key)
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Hitman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  // objects aren't iteratable
    
}