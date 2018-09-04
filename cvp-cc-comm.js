// var XMLHttpRequest = require('XMLHttpRequest');

// function UserAction() {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // alert(this.responseText);
//             console.log(this.responseText);
//         }
//     };
//     xhttp.open("GET", "www.google.com", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     // xhttp.send("Your JSON Data Here");
//     xhttp.send();
// }

// UserAction();

function getApiCall1(arg1) {

  console.log(`arg1 = ${arg1}`);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.myjson.com/bins/fkj6w', true);
  request.onload = function () {

    // Begin accessing JSON data here
    console.log(this.responseText);
  }

  request.send();

}

function getApiCall2() {

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.myjson.com/bins/fkj6w', true);
  request.onload = function () {

    // Begin accessing JSON data here
    console.log(this.responseText);
  }

  request.send();

}