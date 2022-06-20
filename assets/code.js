
 `use strict`
 var datetime = new Date();
 document.getElementById("currentDay").textContent = datetime; //it will print on html page
 
 `use strict`;
 function refreshTime() {
   const timeDisplay = document.getElementById("currentDay");
   const dateString = new Date().toLocaleString();
   const formattedString = dateString.replace(", ", " - ");
   timeDisplay.textContent = formattedString;
 }
   setInterval(refreshTime, 1000);

