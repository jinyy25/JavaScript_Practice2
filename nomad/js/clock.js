
// 5.0 Interval
const clock = document.querySelector("h2#clock");
// clock.innerHTML="tic tack tok";

// function sayHello(){
//     console.log("hello");
// }
// setInterval(sayHello, 5000);  //시간마다 function 실행




// 5.1 Timeouts and Dates
// setTimeout(sayHello,5000);       //timeout 후 1회실행

// const date = new Date();
// date.getDay();
// date.getHours();
// date.getMinutes();
// date.getFullYear();
// new Date().getMinutes();


function getClock(){
    const date = new Date();    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// getClock();
setInterval(getClock, 1000);    //function  일정 간격으로 호출중



//5.2 PadStart //5.3 Recap
// "1".padStart(2,"0");  //인자의 공간이 2자리수가 되고 0으로 시작한다.
// "1".endStart(2,"0");  //인자의 공간이 2자리수가 되고 0으로 끝난다.


//6.0 Quotes
// Where there is a will there is a way


