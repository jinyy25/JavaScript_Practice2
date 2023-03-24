//8.0 Geolocation : 위치얻기 API
const API_KEY = "f51ad8388eff487a32bf0f4457d5c428";

function onGeoOk(position){
    
    //위도, 경도
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("Know your location");
    // console.log("You stay in,",lat,lng );
    // &units=metric : 섭씨 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;    
    // console.log(url);
    
    //fetch() : 브라우저 내장 함수로 원격으로 API 호출
    //library로 인한 크기낭비를 줄임
    //then() : promise 순차적 지연 동작 (서버 응답 기다리는 목적)    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name, data.weather[0].main);
            
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            

            
        });

}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

//getCurrentPosition (성공시, 실패시);
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//8.1 Weather : 날씨 API
//Site : https://home.openweathermap.org/
//API_KEY : f51ad8388eff487a32bf0f4457d5c428
