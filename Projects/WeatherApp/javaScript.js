let temp = document.querySelector(".temperature h1");
let display = document.querySelector(".locationinput input");
let loc = document.querySelector(".location h1");
let search = document.querySelector("span");

window.addEventListener("load", checkWeather)
search.addEventListener("click", checkWeather)

let lat;
let long;
function checkWeather() {
    const apikey = `473cbc3b4ad606591022abbffa14f344`;
    const apiid = `https://api.openweathermap.org/data/2.5/forecast?q=${display.value}&appid=${apikey}&units=metric`;

    checkweather();

    //fetching the fuction must be a async function
    async function checkweather() {
        const response = await fetch(apiid);  //fetch the resource from a network
        var result = await response.json();  //will store the resourse in a JSON file.

        if (response.status == 404) {
            document.querySelector(".container").style.backgroundImage = "none";
            loc.innerHTML = "No data found";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").style.display = "block";
            return;
        }
        // console.log(result)

        if (display.value.toLowerCase != result.city.name.toLowerCase) {
            loc.innerHTML = "No data found";
            return;
        }
        display.value = `${result.city.name}`;
        loc.innerHTML = `${result.city.name}`;

        temp.innerHTML = `${Math.round(result.list[0].main.temp)}&#8451`;

        document.querySelector(".description p").innerHTML = `${result.list[0].weather[0].main}`;
        document.querySelector(".pressure").innerHTML = `Pressure: ${result.list[0].main.pressure}`;
        document.querySelector(".Humidity").innerHTML = `Humidity: ${result.list[0].main.humidity}&#8451`;


        let day = new Date().getDate();
        let time = new Date().getHours();
        let suffix;
        if (time <= 12) {
            suffix = " a.m";
        } else suffix = " p.m";
        //Hourly temperature
        document.querySelector(".column #d1").innerHTML = (time + 3) % 24 + ((time + 3) % 24 < 12 ? " a.m" : " p.m");
        document.querySelector(".column #d2").innerHTML = (time + 6) % 24 + ((time + 6) % 24 < 12 ? " a.m" : " p.m");
        document.querySelector(".column #d3").innerHTML = (time + 9) % 24 + ((time + 9) % 24 < 12 ? " a.m" : " p.m");
        document.querySelector(".column #d4").innerHTML = (time + 12) % 24 + ((time + 12) % 24 < 12 ? " a.m" : " p.m");
        document.querySelector(".column #d5").innerHTML = (time + 15) % 24 + ((time < 15) % 24 ? " a.m" : " p.m");

        //today tomorrow and day after tomorrow temperatures
        document.querySelector("#todaytemp").innerHTML = `${Math.round(result.list[0].main.temp)}&#8451`;
        document.querySelector(".column #t1").innerHTML = `${result.list[1].main.temp}&#8451`;
        document.querySelector(".column #t2").innerHTML = `${result.list[2].main.temp}&#8451`;
        document.querySelector(".column #t3").innerHTML = `${result.list[3].main.temp}&#8451`;
        document.querySelector(".column #t4").innerHTML = `${result.list[4].main.temp}&#8451`;
        document.querySelector(".column #t5").innerHTML = `${result.list[5].main.temp}&#8451`;

        let set = false;
        for (let i = 0; i < result.list.length; i++) {
            if (result.list[i].dt_txt.substring(8, 10) == day + 1 && set == false) {
                document.querySelector("#tomorrowtemp").innerHTML = `${Math.round(result.list[i].main.temp)}&#8451`;
                set = true;
            }
            if (result.list[i].dt_txt.substring(8, 10) == day + 2) {
                document.querySelector("#dattemp").innerHTML = `${Math.round(result.list[i].main.temp)}&#8451`;
                break;
            }
        }

        switch (document.querySelector(".description p").innerHTML) {
            case "Snow":
                document.querySelector(".container").style.backgroundImage =
                    "url('https://i.gifer.com/67T.gif')";

                break
            case "Clouds":
                document.querySelector(".container").style.backgroundImage =
                    "url('https://i.gifer.com/1F1I.gif')";
                break;
            case "Fog":
                document.querySelector(".container").style.backgroundImage =
                    "url('https://i.gifer.com/OWZE.gif')";
                break;
            case "Rain":
                document.querySelector(".container").style.backgroundImage = "url('https://i.gifer.com/Cbd.gif')";
                break;
            case "Clear":
                document.querySelector(".container").style.backgroundImage =
                    "url('https://i.gifer.com/68J.gif')";
                break;
            case "Thunderstorm":
                document.querySelector(".container").style.backgroundImage =
                    "url('https://i.gifer.com/LH1d.gif')";
                break;
            default:
                document.querySelector(".container").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                break;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


