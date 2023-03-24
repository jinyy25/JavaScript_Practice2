


//4.0 Input Values
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     console.log("hello",loginInput.value);
// }

// loginButton.addEventListener("click",onLoginBtnClick);


//4.1 Form Submission
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     // if(username === ""){
//     //     alert("Please write your thoughts");
//     // } else if (username.length > 15){
//     //     alert("Your thoughts is too much")
//     // }
//     console.log(username);
// }

// loginButton.addEventListener("click",onLoginBtnClick);

//4.2 events
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginBtnSubmit(apple){
//     // const username = loginInput.value;
//     // console.log(username);
//     //function에 대한 argument 호출
//     apple.preventDefault();         //어떤 event의 기본행동을 멈춤
//     console.log(apple);
// }

// 브라우저가 알아서 fucntion 실행
// function 호출하며 (event)를 발생
// submit 주체 input 내용 제출
// onLoginBtnSubmit({information})
// loginForm.addEventListener("submit",onLoginBtnSubmit);


//4.3 Evnts part Two
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const link = document.querySelector("a");

// function onLoginBtnSubmit(event){
//         event.preventDefault();         // event 기본동작을 멈춤
// };

// function handleLinkClick(event){
//     event.preventDefault();    
//     // console.dir(event);
//     //alert 이후 link 이동 동작
//     // alert("clicked!");
// }

// loginForm.addEventListener("submit",onLoginBtnSubmit);
// link.addEventList ener("click",handleLinkClick);
// handleLinkClick({information about the event that just happened})


//4.4 Getting Username
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//String 만 표현되는 문자 : upper case (classic)
const HIIDDEN_CALASSNAME = "hidden";

//오타방지 const 
//4.7 recap : 두번사용할 필요없는 변수 제거
const USERNAME_KEY =  "username";

function onLoginBtnSubmit(event){
        event.preventDefault();         // event 기본동작을 멈춤
        loginForm.classList.add(HIIDDEN_CALASSNAME);
        
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
    
        
        // greeting.innerText = "HI " + username;
        // greeting.innerText = `HI ${username}`; // another way
        // greeting.classList.remove(HIIDDEN_CALASSNAME);
        paintGreetings();
    };

// loginForm.addEventListener("submit",onLoginBtnSubmit);

//4.5 Saving username
// localStorage : 브라우저에 저장하고 반환가능 API
// DevTools applicaion tap 에서 확인가능
// localStorage.setItem(key,value);
// localStorage.getItem();
// localStorage.removeItem();


//4.6 Loading username
//저장된 이름 변수
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIIDDEN_CALASSNAME);
}

if(savedUsername === null){
    // Show the form
    loginForm.classList.remove(HIIDDEN_CALASSNAME);
    loginForm.addEventListener("submit",onLoginBtnSubmit);
} else {
    // Show the greetings
    paintGreetings();
}

























