//함수
function singSong () {
    //do something
    console.log("안녕")
}

//함수 실행
singSong();

//inputs arguments
function greet(person) {
    console.log(`firstName is: ${person}`);
}

//함수 실행
greet('happy');


// DEFINE YOUR FUNCTION: test1
function rant(message){
    const upper = message.toUpperCase();
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

//2 arguments -1
function greet2(firstName, lastName) {
    console.log(`hey there, ${firstName} ${lastName[0]}.`);
}

greet2('Selina','Kim');

////2 arguments - 2
function repeat(str, numTimes) {
    let result =''
    for (let i = 0; i < numTimes; i++) {
        result +=str;
    }
    console.log(result);
}

repeat('hi ', 5);

//test2
function isSnakeEyes(num1, num2){
    if (num1 ===1 && num2===1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

//반환 키워드 return
// 재사용+ 함수 종료

//반환 값 실습
function multiply(num1, num2) {
    const mul = num1 + num2;
    return mul;
}

//if 
function isShortsWeather(ondo) {
    if (ondo >=75) {
        return true
    } else {
        return false
    }
}

//마지막 요소
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }

  //대문자 변환
function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//배열 합계 연습
//SOLUTION #1:

function sumArray(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
//SOLUTION #2:

function sumArray(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}


//요일 연습

function returnDay(dayNumber) {
    // 주어진 숫자가 1부터 7 사이인지 확인
    if (dayNumber >= 1 && dayNumber <= 7) {
        // 1부터 7까지의 숫자에 대응하는 요일 배열 생성
        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        // 숫자에 대응하는 요일 반환
        return daysOfWeek[dayNumber - 1];
    } else {
        // 주어진 숫자가 범위를 벗어나면 null 반환
        return null;
    }
}