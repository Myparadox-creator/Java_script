// Reduce function
/*const myNums = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNums.reduce(function(acc, curVal) {
    console.log(`acc: ${acc} and curVal: ${curVal}`)
    return acc + curVal
}, 0)

console.log(myTotal);  // basics of reduce method*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0)

console.log(myTotal);


const shoppingCart = [
    {
        item: "item1",
        price: 100
    },
    {
        item: "item2",
        price: 200
    },
    {
        item: "item3",
        price: 300
    },
    {
        item: "item4",
        price: 400
    },
]

const priceTopay = shoppingCart.reduce((acc, curVal) => (acc + curVal.price), 0)

console.log(priceTopay);