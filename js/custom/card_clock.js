var mykey={weather:"eb35e798bc97190832aef62755e7b8c8"},locationurl="https://extreme-ip-lookup.com/json/",cityname="",weatherurl="",userip="",week=["SUN","MON","TUE","WED","THU","FRI","SAT"];function getweatherdata(){fetch(weatherurl).then((e=>e.json())).then((e=>{clock.weatherimg="/assets/weather/"+e.weather[0].icon+".png",clock.temperature=e.main.temp+"*C",clock.humidity=e.main.humidity+"%",clock.ip=userip,clock.humidityimg="/assets/weather/hu.png",clock.city=e.name;setInterval(t,1e3);function t(){var e=new Date;clock.time=c(e.getHours(),2)+":"+c(e.getMinutes(),2)+":"+c(e.getSeconds(),2),clock.date=c(e.getFullYear(),4)+"-"+c(e.getMonth()+1,2)+"-"+c(e.getDate(),2)+" "+week[e.getDay()];var t,a=e.getHours();a>12?(a-=12,t=" PM"):t=" AM",clock.daylight=t}function c(e,t){for(var c="",a=0;a<t;a++)c+="0";return(c+e).slice(-t)}t(),clock.clockshow=!0,t()})).catch((function(e){console.log(e)}))}fetch(locationurl).then((e=>e.json())).then((e=>{cityname=e.city,void 0===e.city&&(cityname=e.region),void 0===e.region&&(cityname=e.country),userip=e.query,weatherurl="https://api.openweathermap.org/data/2.5/weather/?q="+cityname+"&units=metric&appid="+mykey.weather,getweatherdata()})).catch((function(e){console.log(e)}));var clock=new Vue({el:"#clock",data:{ip:"",time:"",weatherimg:"",temperature:"",humidityimg:"",humidity:"",usaqi:"",city:"",date:"",daylight:"",clockshow:"false"}});