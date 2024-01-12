//ForEach > super important 
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(el) {
    if(el % 2 === 0) {
        console.log(el)
    }
});

for (let el of numbers) {
    console.log(el);
}


//Map -> super important
// 새로운 값을 받아서 반환하는 거

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t){
    return t.toUpperCase();
})

texts; // ['rofl', 'lol', 'omg', 'ttyl']
caps; // ['ROFL', 'LOL', 'OMG', 'TTYL']


const numbers2 = [1, 2, 3, 4, 5]
    numbers2.map(function (num) {
        return num *2;
    })

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const plz = fullNames.map(function (name) {
    return name.first;
})


//Arrow Functions > super important
const square = (x) => {
    return x*x;
}

const sum = (x, y) => {
    return x +y;
}

const greet = (name) => {
    console.log(`Hey ${name}`);
}

//더 짧게 만드는 화살표 함수의 반환
// return을 안 적어도 됨

const rollDie = () => (
    Math.floor(Math.random()*6)+1
)

const add = (a,b) => a+b

//setTimeout 
console.log("HELLO!!!!");
setTimeout(() => {
   console.log("...are you still there?"); 
}, 3000);

console.log("GOODBYE!!");


//setlnterval
const id = setInterval(() => {
    console.log(Math.random);
}, 2000);


clearInterval(id);


//Filter
//오래된 아이템, 새로운 아이템 등을 필터링하려고 할 때 유용하게 사용됨
//ture or false

const numbers3 = [1, 2, 3, 4, 5]

numbers3.filter(n=> {
    return n <10
})

//평점이 높은 영화만 filter
const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)


//filter랑 map이랑 같이 사용할 경우

movies.filter(m => m.score > 80).map(m=>m.title);



//some and every
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

//ture or false 값은 반환
exams.every(score => score >= 75)
exams.some(score => score >= 75)


function allEvens(arr) {
    return arr.every(function (num) {
        return num % 2 === 0;
    });
}

//Reduce (어려움)
//배열을 가져다가 점차 줄여가면서 마지막에는 결국 하나의 값만 남기게 하는 것
const prices = [9.99, 1.50, 19.99, 49.99, 30.55];

prices.reduce((total, price)=> {
    return total + price
})