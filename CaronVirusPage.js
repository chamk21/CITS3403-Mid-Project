//This function is for calculating the total deaths if user needs to
document.getElementById('viewTotals').addEventListener('click', loadTotals);

function loadTotals() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://coronavirus-tracker-api.herokuapp.com/v2/locations", true);
    xhr.onload = function() {
        if (this.status == 200) {
            var information = JSON.parse(this.responseText);
            var output = '';
            output = '<ul id="totalsList">' +
                '<li><b>Confirmed Cases</b>:' + " " + information.latest.confirmed + " " + 'people' + '</li>' +
                '<li><b>Total Deaths</b>:' + " " + information.latest.deaths + " " + 'people' + '</li>' +
                '<li><b>Total recovered</b>:' + " " + information.latest.recovered + " " + 'people' + '</li>' +
                '</ul>'

        }
        document.getElementById('totaldeaths').innerHTML = output;
    }
    xhr.send();
}


//function for loading deaths of each country in carona virus api
document.getElementById('viewbutton').addEventListener('click', loadCarona);
// Load Github Users
function loadCarona() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://coronavirus-tracker-api.herokuapp.com/v2/locations", true);
    xhr.onload = function() {
        if (this.status == 200) {
            //There is another way of fetching the above info using onreadystatechange. I have used onload because it is much easier
            //but i will demonstrate how it can done using onreadystatechange
            //var xhr = new XMLHttpRequest();
            //xhr.open('GET', "https://coronavirus-tracker-api.herokuapp.com/v2/locations", true);
            //xhr.onreadystatechange = function () {
            //  if(this.readyState==4 && status==200)
            // EVERYTHING ELSE IS EXACTLY THE SAME AS USING ONLOAD EXCEPT THE STARTING BIT AS SHOWN ABOVE
            // }
            //HTTP STATUS         //readystate values
            //200:OK              //0:request not initialised          3:processing request
            //403:FORBIDDEN       //1:server connection estabilished   4:request finished and response ready
            //404:NOT FOUND       //2:request received
            var information = JSON.parse(this.responseText);
            var output = '';
            //the total number of countries is 261 because the ids go up to 261
            for (var i = 0; i <= 261; i++) {
                //this is checking if countries have provinces or not
                if (information.locations[i].province === "") {
                    output += '<ul id="CountryList">' +
                        '<li>Country Name:' + " " + information.locations[i].country + '</li>' +
                        '<li>Confirmed Cases:' + " " + information.locations[i].latest.confirmed + '</li>' +
                        '<li>Confirmed Deaths:' + " " + information.locations[i].latest.deaths + '</li>' +
                        '<li>Recovered Patients:' + " " + information.locations[i].latest.recovered + '</li>' +
                        '</ul>'
                } else {
                    output += '<ul>' +
                        '<li>Country Name:' + " " + information.locations[i].country + '</li>' +
                        '<li>Province:' + " " + information.locations[i].province + '</li>' +
                        '<li>Confirmed Cases:' + " " + information.locations[i].latest.confirmed + '</li>' +
                        '<li>Confirmed Deaths:' + " " + information.locations[i].latest.deaths + '</li>' +
                        '<li>Recovered Patients:' + " " + information.locations[i].latest.recovered + '</li>' +
                        '</ul>'
                }

            }
            document.getElementById('C').innerHTML = output;
        }
    }

    xhr.send();
}