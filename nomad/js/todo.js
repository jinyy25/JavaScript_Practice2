
// 7.0 Setup
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput= toDoForm.querySelector("input");

//toDos가 항상비어있음
// const toDos = [];
let toDos = [];
const TODOS_KEY = "todos";

//7.3 Saving To Dos
function saveToDos(){
    //JSON 형태 로 변환 (작업가능한 형태로)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 7.2 Deleteing To Dos
function deleteTodo(event){
    // console.dir(event.target.parentElement.innerText);

    //부모요소 삭제
    const li = event.target.parentElement;
    li.remove(); 
    // 7.8 Deleting To Dos part Three
    // console.log("test:",li.id);
    // toDos = toDos.filter((toDo) => toDo.id !== li.id); //문자 => 숫자 변환필요
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    // filter 후 객체 재저장 필요
    saveToDos();
}

// 7.1 Adding ToDos
function paintToDo(newTodo){
    
    //list, span 추가
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    
    //li에 span 추가
    li.appendChild(span);
    li.appendChild(button);
    

    //List에 li 추가
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;    
    toDoInput.value = "";
    
    // 7.6 Deleting To Dos part One
    // local storage ID 부여
    // JSOn 객체 [{},{}...] 형태
    const newTodoObj = {
        text: newTodo
        , id: Date.now() // item 구분용
    }

    // toDos.push(newTodo);
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

    // console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// function sayHello(item){
//     console.log("this is the turn of",item);
// }


// 7.4 Loading To Dos part One
//local storage 데이터 저장
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null){
    // 사용가능한 array 형태
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
   
    // 7.5 Loading To Dos part Two
    // 새로고침해도 Storage Data 없어지지 않고 update
    toDos = parsedToDos;

    // parsedToDos의 item 갯수만큼 반환 (반복적용)
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item)=> console.log("this is the turn of",item));
    // parsedToDos({text : "a", id: 112});
    parsedToDos.forEach(paintToDo);
    

}

// 7.7 Deleting To Dos part Two
// filter : exclude item
// function filterFunc(){}

// 인수 function에서 요소들중 true 만 반환하여 새로운 배열형성
// [1,2,3,4].filter(filterFunc);
// filterFunc(4);

// const arr = [1,2,3,4];
// arr.filter(item => item >2);  //item : arr의 요소
