document.getElementById("myBtn").addEventListener("click", findWeather);


function findWeather(){

    var city = document.getElementById("inputCity");
    document.getElementById("demo").innerHTML = "You are searching for: " + city.value;

    //cityNameText.parentNode.removeChild(cityNameText);


var myRequest = new Request("http://api.openweathermap.org/data/2.5/weather?q= "+ city.value +" &appid=eda5af1aafe06dabcb1b971673e17895", {
    method: 'GET',
    headers: {'accept': 'application/json'} //I don't know what this does (yet)
});

fetch(myRequest).then(function(response) {

    response.json().then(function(data){ //will give us data in JSON format
      console.log(data);
      console.log(data.name);
      console.log(data.main.temp);
       // console.log(data[0].title);

        portrayWeather(data);

    }).catch(function(error) {
        console.log(error);
    });

}).catch(function(err) {
    console.log(err);
});
//console.log(data);



function portrayWeather(data) {

        //check to see if contentCOntainer
            //iuf true remove the container
       var temp = document.getElementById("contentContainer");
       console.log(temp);

       if(temp){
            temp.parentNode.removeChild(temp);
       }

      document.getElementById("demo").innerHTML = data.name;

      var contentContainer = document.createElement("div");
      contentContainer.id = "contentContainer";
      document.body.appendChild(contentContainer);

      var cityName = document.createElement("H3");
      cityName.id = "cityName";
      var cityNameText = document.createTextNode(data.name + " Weather");
      cityNameText.textContent = (data.name + " Weather");

      var cityWeather = document.createElement("p");
      cityWeather.className = "weatherVar";
      var cityWeatherText =  document.createTextNode("right now the weather is " + data.weather[0].description);

      var cityHumidity = document.createElement("p");
      cityHumidity.className = "weatherVar";
      var cityHumidityText =  document.createTextNode("The humidity is " + data.main.humidity);

      var cityWindSpeed = document.createElement("p");
      cityWindSpeed.className = "weatherVar";
      var cityWindSpeedText =  document.createTextNode("The wind speed is " + data.wind.speed);


      contentContainer.appendChild(cityName);
      contentContainer.appendChild(cityWeather);
      contentContainer.appendChild(cityHumidity);
      contentContainer.appendChild(cityWindSpeed);
      cityName.appendChild(cityNameText);
      cityWeather.appendChild(cityWeatherText);
      cityHumidity.appendChild(cityHumidityText);
      cityWindSpeed.appendChild(cityWindSpeedText);

    console.log(cityName.childElementCount);
    console.log(cityName);
    console.log(contentContainer.childNodes.length);
    console.log(cityName.childNodes.length);
    console.log(city.value);
     /*  if(contentContainer.childNodes.length > 4){
             cityName.removeChild(cityName.childNodes[0]);
     }*/
    console.log(cityName.childElementCount);



}


}
