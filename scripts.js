
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCh0iDPUpcWU4-Unh87QFHnyZsvzkpcWFo",
   authDomain: "enkeksi-37bd0.firebaseapp.com",
   databaseURL: "https://enkeksi-37bd0-default-rtdb.firebaseio.com",
   projectId: "enkeksi-37bd0",
   storageBucket: "enkeksi-37bd0.appspot.com",
   messagingSenderId: "243719375680",
   appId: "1:243719375680:web:baf11ba478ab6aecc2c8a5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
       //THIS IS WHERE YOU PASTE THE CODE TO CONNECT TO YOUR OWN DATABASE
       //Copy and paste the CDN bit of code from your app that you created on Firebase.
       //The script tag above is already there, so careful not to have duplicate script tags.
       //After you've copied and pasted, just delete the unnecessary script tags. 
  

       import {getDatabase, ref, get, set, child, update, remove}
       from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js" //Copy and Paste the URL from near the top of the CDN you pasted in from firebase
       // (the one where you imported "initializeApp" from),
       //but change "firebase-app" to "firebase-database"
       

       const db = getDatabase();



function addTime() {
    // Get the current time without seconds
    var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

   /* // Check if the time is already in the list
    var timeList = document.getElementById("timeList");
    var times = timeList.getElementsByTagName("li");
    var alreadyExists = false;
    for (var i = 0; i < times.length; i++) {
        if (times[i].textContent === currentTime) {
            alreadyExists = true;
            break;
        }
    }
*/
        set(ref(db, 'times/'),{
        time: valueof.currentTime,
        timestamp: Date.now()
      })
        .then(() => {
          alert('Data added successfully');
        })
        .catch((error) => {
          alert(error);
        });
    
    alert("nappi toimii");

   /* // Add the time to the list if it doesn't already exist
    if (!alreadyExists) {
        var newTime = document.createElement("li");
        newTime.textContent = currentTime;

        // Find the correct position for the new item
        var inserted = false;
        for (var i = 0; i < times.length; i++) {
            if (currentTime < times[i].textContent) {
                timeList.insertBefore(newTime, times[i]);
                inserted = true;
                break;
            }
        }

        // If the new item is the latest, append it to the end
        if (!inserted) {
            timeList.appendChild(newTime);
        }

        // Save the times to Local Storage
        localStorage.setItem("times", timeList.innerHTML);
    }*/
};

