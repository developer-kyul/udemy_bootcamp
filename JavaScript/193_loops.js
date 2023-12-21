for (let i = 1; i <=10; i++) {
    console.log(i);
}

// 짝수만 출력
for(let eve = 0; eve <= 20; eve+=2) {
    console.log(eve)
}

//100부터 줄어들게
// 짝수만 출력
for(let num = 100; num >= 0; num-=10) {
    console.log(num)
}

//Infinite Loops 무한루프 
//DO NOT RUN THIS LOOP!! BAD!!
//===================================
// for(let infi = 0; infi >= 0; infi++) {
//     console.log(infi)
// }

//Looping Over Arrays
const animals = ['cat', 'dog', 'bird'];

for(let i = 0; i < animals.length; i++ ){
    console.log(i, animals[i]);
}



for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
  }

//Nested Loops
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}


//while_Loops
//비번 
const SECRET ="BabyHippo"

let guess = promot("enter the secret code...");
while (guess != SECRET) {
    guess = prompt("enter the secret code...");
}

console.log("CONGRATS YOU GOT THE SECRET!!!")


//최대 넘버값 맞추기 게임
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}

//For of 
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

for(let number of numbers) {
    console.log(number*number)
}

//객체루프
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

