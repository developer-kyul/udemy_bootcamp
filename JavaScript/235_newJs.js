//DefaultParams

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) +1
}


//spread
//배열을 펴서 하나로 만드는 것
const num = [5,9, 8,4,55555]
Math.max(...num);

//rest 