window.addEventListener('DOMContentLoaded', function () {

    loadData();


});


function loadData(){

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Oberursel&appid=fbde243e0aa0ec3563f30926d3691a4f", 
    function(data){

        console.log(data);
        //console.log(data.name);

        //$(".weather").append(data.name);

        let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        let temperature = data.main.temperature;
        //let weather = 
        $(".icon").attr("src", icon);
        $(".temperature").append(temperature/4.1);
        
        console.log(temperature);

});
}
