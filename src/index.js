let searthInfo =document.getElementById("searthInfo");
let city = document.getElementById("cityName");


class NoSuchCity extends Error
{
  constructor (msg = "Invalid Request") 
  {
    supper(msg);
  }
}

searchInfo.addEventListener("submit", (event) => 
{
    event.preventDefault();

    fetch ( 
      `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=898a077439ff34250f55ee728acb2fd6&units=imperial`
    
    )
    
    .then((data) => 
    {
      if (data.ok) 
      {
        return data.json(); 
      }
        else 
        {
          throw new NoSuchCity();
        }
    })

    .then((data) => 
    {
      document.getElementById("city").textContent = data.name;   
    

    
      document.getElementById("temp").textContent = "Temperate is " + data.main.temp + " °F";
      document.getElementById("description").textContent = "with " + data.weather[0].description;

      document.getElementById("temp_min").textContent = "Min temp for the day is " + data.main.temp_min + "°F";
      document.getElementById("temp_max").textContent = "With the highs in the " + data.main.temp_max + "°F";

      document.getElementById("humidity").textContent = "Todays humidity is: " + data.main.humidity + "%";

      document.getElementById("wind").textContent = "Wind today is: " + data.wind.speed + " MPH";
      
          
    })
    
    .catch ((err) => 
    { 
      if(err instanceof NoSuchCity); 
      {
        document.getElementById("city").textContent = err.msg;   
        document.getElementById("temp").textContent = `Please confirm city name "${city.value}".`;
        document.getElementById("temp_min").textContent = "";
        document.getElementById("temp_max").textContent = "";
        document.getElementById("description").textContent = "";
        document.getElementById("wind").textContent = "";
        document.getElementById("humidity").textContent = "";
      }
      
    });

});


// date and time
document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}



