function addTime() {
    // Get the current time without seconds
    var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    // Check if the time is already in the list
    var timeList = document.getElementById("timeList");
    var times = timeList.getElementsByTagName("li");
    var alreadyExists = false;
    for (var i = 0; i < times.length; i++) {
        if (times[i].textContent === currentTime) {
            alreadyExists = true;
            break;
        }
    }

    // Add the time to the list if it doesn't already exist
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
    }
}

window.onload = function() {
    // Load the times from Local Storage
    var timeList = document.getElementById("timeList");
    timeList.innerHTML = localStorage.getItem("times");
};