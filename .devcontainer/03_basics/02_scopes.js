



/*console.log(a)
console.log(b)
console.log(c)
*/
//var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a)
}

//console.log(a)
//console.log(b)
//console.log(c)

// Nested scope

function one(){
    const username = "Aditya"

    function two(){
        const website = "github"
        console.log(username)
    }

    //console.log(website)

    two()

}

//one()

if(true){
    const username = "Aditya"

    if(username === "Aditya"){
        const website = " github"
        //console.log(username + website)
    }

    //console.log(website)
}

//console.log(username)


//+++++++++++++ INTERESTING CONCEPT ++++++++++++++

console.log(addone(6))
function addone(value){
    return value +1
}

//addTwo(6)
const addTwo = function(value){
    return value +2
}
