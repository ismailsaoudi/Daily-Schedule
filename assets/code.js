
 
 var datetime = new Date();
 document.getElementById("currentDay").textContent = datetime; //it will print on html page
 
 
 function refreshTime() { // this will format the date and initialize it 
   const timeDisplay = document.getElementById("currentDay");
   const dateString = new Date().toLocaleString();
   const formattedString = dateString.replace(", ", " - ");
   timeDisplay.textContent = formattedString;
 }
   setInterval(refreshTime, 1000);


   document.querySelector(".btn").addEventListener("click", function ()
   {
       var data = document.getElementById("floatingTextarea").value ;
       localStorage.setItem("event", data) ;
       alert("event saved") ;
       console.log("event saved")
   } , true);


  


