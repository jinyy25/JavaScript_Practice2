
// const vs let vs var
// variable 세타입의 차이점
// const : update 허용 x
// let : update 허용
// var : 이전의 js에서 쓰던 방식으로
// update가 어디서든 가능, 언어로 보호받기 힘듬 (실수로 연산해도 알려주지 않음)


//Symbol test
// let obj = { 
//    name: "cy"
//  };
 
//  let id = Symbol("id");
 
//  obj[id] = 1;
 
//  console.log( obj[id] )


// const a = 5;
// const b = 2;
// let name = "isaac";
// const name = "isaac";
// error 
// console.log(a*b);
// console.log(name);
// name = "Isaac yun";
// console.log(name);

// undifined vs null
// undifined : 컴퓨터 메모리 안에 varilable이 존재하나, 공간에 값이 들어있지 않음
// null : 메모리안에 비어있다고 인식하고 있음
// let something;
// console.log(something);

// data structure
// array
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";
// const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];
// const non = [1,2,"hello",false,null,true,undefined];

// Get Item from Array
// console.log(daysOfWeek[5]);

// Add one more day to the array
// daysOfWeek.push("add");
// console.log("re:"+daysOfWeek);


// const playerName = 'son';
// const playerPoints = 1212;
// const playerHansome = false;
// const playerFat = 'little bit';

// player[0] = name
// player[1] = point

//List
// const player1 = ["nico",1212,false,"littel bit"];


//Object
// const player = {
//    name: "son",
//    points: 10,
//    fat: true,    
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// console.log(player);
// player.fat = false;
// player.points = player.points + 10;
// player.number = 11;
// console.log(player);

//Constant 전체를 하나의 값으로 인식
//Constant 안의 데이터를 업데이트 하는 것에는 문제가 없음


// function & arguments
// function doHello(name, age){
//    console.log("Hello, My name is "+ name + " and I'm "+ age);
// }

// doHello("Isaac", 30);
// doHello("Son", 32);
// doHello("Paul", 100);

// function minusFive(a,b){
//    console.log(a+b);
// }

// function divide(a,b){
//    console.log(a/b);
// }

// minusFive(7,8);
// divide(7,8);


// const person = {
//    name: "Yun",
//    doHello:function(otherPersonsName){
//       console.log("Hey! "+ otherPersonsName + " Nice to meet yea");
//    }
// }

// console.log(player.name);
// person.doHello("Park");
// person.doHello("Jin");


//2.9 Recap 1
// null 변수가 할당된 값 : 비어있는 값이 들어 있음 (메모리를 차지하고 있음)
// undefined 변수에 값을 부여하지 않음 : 값이 없음
// const c = 5;
// var isNotCat = true;

// const toBuy = ["juice","fruit","potato"];
// toBuy[2] = "milk";
// console.log(toBuy);
// toBuy.push("oneMore");
// console.log(toBuy);

//2.9 Recap 2
// const personal = {
//    name : "jin",
//    age : 30
// };

// console.log(personal);
// personal.name = "Isaac";
// console.log(personal);
// personal.level = "20";
// console.log(personal);

// function minusFive(potato){
//    console.log(potato -5);
// }
// // console.log(potato); --정의되지 않은 
// minusFive(5,10,20,40);



// console.log("========= Calculator =========");
// const calculator = {
//    add : function(a,b){
//       // console.log(a + b); // return 없을경우 function을 외부 변수로 불러올 수 없음
//       return (a + b);
//       // console.log("Bye"); // return 이후이므로 작동하지 않음
//    },
//    minus : function(a,b){
//       return (a - b);
//    },
//    times : function(a,b){
//       return (a * b);
//    },
//    divide : function(a,b){
//       return (a / b);
//    },
//    //거듭제곱
//    power : function(a,b){      
//       return (a ** b);
//    }
// }

// const plusResult = calculator.add(2,3);
// const minusResult = calculator.minus(plusResult,10);
// const timesResult = calculator.times(10,minusResult);
// const divideResult = calculator.divide(timesResult,plusResult);
// const powerResult = calculator.power(divideResult,minusResult);
// console.log(plusResult);


//undifined
// console.log(calculator.power(5,2));


// console.log("========= Return =========");

//2.11 Returns
// // const age = 30;
// function calculateAge(ageOfPerson){
//  ageOfPerson + 2;
//  return "Hello";
// }

// const krAge = calculateAge(age);
// console.log(krAge);

// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
// var key = Symbol('key');
// console.log(typeof key); // symbol

// var obj = {};
// obj[key] = 'value';
// console.log(obj[key]); // value

//2.13 Conditionals
// console.log("========= Conditionals =========");

// prompt : 메세지를 보여주고, input을 제시, 
// javascript code 멈춤, 기본적인 양식제시 (old function, 안이쁘)
// const age = prompt("How old are you?");
// console.log(age);
// console.log(typeof age); //string

//type 변경
// parseInt("15");
// console.log(age, parseInt(age));


//2.14 Conditional part two
// const num = parseInt(prompt("How old are you?"));

//isNaN : boolean 반환 True or False
// console.log(isNaN(num));
// if(isNaN(num)){
// // condition === true
//  console.log("please write a number");
// } else {
// // conditions === false
// console.log("Thank you for writing your age");
// }

// NaN value
// const mem = NaN;
// if(true){
// console.log("hey true");
// }

//2.15 Conditional part three
 
// const age = parseInt(prompt("How old are you?"));


// // 상단부터 차례로 조건문을 증명함
// // 상단조건문이 false일 경우 하단 조건문 실행
// if(isNaN(age)){
// // condition === true
//  console.log("please write a number"); 
// } else if(age < 19){
// console.log("Yout are too young");
// }else if(age>=19 && age<=50){  
//    //true && true 의 경우 drink 실행
//    //false && true 의 경우 false 로 하단 조건문으로 진행
// console.log("You can drink");
// // } else if (age>=19 || age<=50){
// // //false || true 의 경우 true 로 하단 조건문으로 진행
// // console.log ("'or' excample")
// } else {
// // conditions === false
// console.log("You can't drink");
// }

// true || true === true
// false || false === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false



//2.16 Recap
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0){
// // condition === true
//  console.log("please write a real positive number"); 
// } else if(age < 19){
// console.log("Yout are too young");
// }else if(age>=19 && age<=50){  
// console.log("You can drink");
// } else if (age> 50 && age<=80){
//    console.log("You should exercise");
// } else if (age > 80){
//    console.log("You can do wharever you want");
// } else if (age === 100){   
//    console.log("wow you are wise");
// }

// // and or 규칙 동일하게 적용
// if((a && b)||(c && d)||(e || f)){

// }


// 3.0 DOM : The Document Object
//JavaScript 관점으로 Html 검색
// document                //document 객체
// console.dir(document);  //객체에 속한 프록퍼티 
// document.title = "Yop"; //프로퍼티값 변경 : 브라우저 제목 바뀜 (htl title태그에 영향)
// document.body
// document.location
// const title = document.getElementById("title"); //elementId 값 가져옴 (태그Id의 값)
// title.innerText = "Change"; //js에 의해 변경 (개념유의)
// console.log(title.className);



 //3.2 Searching For Elements
// const hellos = document.getElementsByClassName("hi");
// console.log(hellos);

//tagName을 가져옴
// const title = document.getElementsByTagName("h1");

//tag 내부에 있는 내용을 들고옴
// const title = document.querySelector(".hello h1:first-child");
// 매개변수 해당하는 모든 태그를 가져옴
// const title = document.querySelectorAll(".hello h1");


//명시차이
// const title = document.getElementById("hello");
// const title = document.querySelector(".hello h1 ");
// title.innerText = "hey";
// console.log(title);

//dir : element 내부
// console.dir(title);

//3.3 Events
// document는 HTML이 app.js를 load하기에 존재
// 그 다음에 browser가 document에 접근하도록 도움
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     h1.style.color = "blue";
// }

// handleTitleClick();
// title.addEventListener("click", handleTitleClick);


//3.4 Events part Two
function handleMouseEnter(){
    h1.innerText = "mouse is here";
}
function handleMouseLeave(){
    h1.innerText = "mouse is hereget out of here";    
}

// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)
// console.dir(title); // 어떤 event 적용가능한지 확인


//3.5 More Events
//다른방법 : this
// h1.onclick = handleTitleClick;
// h1.addEventListener("click",handleTitleClick); 
// h1.onmouseenter = handleMouseEnter;
// addEventListener를 사용할경우 추후에 .removeEventListner로 제거가능
// 참고 : https://developer.mozilla.org/ko/docs/Learn/JavaScript


// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";    
// }
// function handleWindowCopy(){
//     alert("copier");
// }
// function handleWindowOffline(){
//     alert("SOS no Wifi");
// }
// function handleWindowOnline(){
//     alert("connected");
// }

// window.addEventListener("resize", handleWindowResize); 
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


//3.6 CSS in Javascript
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
    //     const currentColor = h1.style.color;
    //     let newColor;
    
    //     if(currentColor === "blue") {
        //         newColor = "tomato";
        //     } else {
            //         newColor = "blue";
            //     }
            
            //     h1.style.color = newColor;
            // }
            
            
            // h1.addEventListener("click",handleTitleClick); 
            
            
//3.7 CSS in Javascript Two
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const clickedClass = "clicked specialFont";
    
//     // if(h1.className === "clicked"){ //raw value : error 가능성
//     if(h1.className === clickedClass){ 
//         h1.className = "";
//     }else{      
//         //이전과 관계없이 교체해버림 : error 가능성
//         h1.className = clickedClass; //add className 
//     }
// }

// h1.addEventListener("click", handleTitleClick);


//3.8 CSS in Javascript Three
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // contains : element에 class가 포함되어 있는지 알려줌  
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){ 
    //     h1.classList.remove(clickedClass);
    // }else{      
    //     h1.classList.add(clickedClass); 
    // }

    //toggle로 대체 :token 있는지 확인하고 제거 혹은 추가
    h1.classList.toggle("clicked"); 

}

h1.addEventListener("click", handleTitleClick);


















