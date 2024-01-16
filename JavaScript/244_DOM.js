//Selecting

//id 선택
const image = document.getElementById('mainheading');

//tag 선택
const el = document.getElementsByTagName('img');

//class 선택
const el2 = document.getElementsByClassName('el2');

//querySelector -> css 선택하는거랑 똑같이 쓰면 됨
const el3 = document.querySelector('#el3')
const el4 = document.querySelector('a[title="Java"]')
const el5 = document.querySelector('.el5')

//querySelectorAll -> css 선택하는거랑 똑같이 쓰면 됨
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

//sample
const doneTodos = document.querySelectorAll('.done')
const checkbox = document.querySelector("input[type='checkbox']")

//Manipulate
//innerText >> 단순히 안에 있는 글자만 바꿈
document.querySelector('h1').innerText = "hi"

//innerHTML >> 태그를 포함한 내용 변경이 가능
document.querySelector('h1').innerHTML = "<i>hi</i>"


//Attributes (속성)
document.querySelector('#banner').id = "banner02"
document.querySelector('#banner').scr = "banner02"
document.querySelector('#banner').href = "banner02"
document.querySelector('#banner').title = "banner02"

//sample
document.querySelector('img').src ="https://devsprouthosting.com/images/chicken.jpg"
document.querySelector('img').setAttribute('alt', 'chicken');

//스타일 변경하기
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = "red";
    link.style.textDecorationColor = "blue";
    link.style.textDecorationStyle = "wavy";
}

//test_01
const container = document.querySelector('#container');
container.style.textAlign = "center";

const img = document.querySelector('img');
img.style.width = "150px"
img.style.borderRadius = "50%"

//test_02
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // PLEASE DON'T CHANGE THIS LINE!
 
// YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}

//ClassList
const h2 = document.querySelector("h2");
h2.classList.add ="purple";
h2.classList.remove ="purple";
h2.classList.toggle ="purple";

//test01
const lis = document.querySelectorAll('li')
 
for (let li of lis) {
  if (li.classList.contains('highlight')) {
    li.classList.remove('highlight');
  } else {
    li.classList.add('highlight');
  }
}

const lis = document.querySelectorAll('li');
 
for (let li of lis) {
  li.classList.toggle('highlight');
}

//계층이동