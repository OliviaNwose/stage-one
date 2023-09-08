


                // Function to update the day of the week and milliseconds
                function updateDayAndTime() {
                    const currentDate = new Date();
                    const dayOfWeekElement = document.getElementById("dayOfWeek");
                    const dateElement = document.getElementById("date");
                    const millisecondsElement = document.getElementById("milliseconds");
        
                    // Display the current day of the week
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    const dayOfWeek = daysOfWeek[currentDate.getDay()];
                    dayOfWeekElement.textContent =  dayOfWeek;

                    // Display the current date
                    dateElement.textContent =  currentDate.toLocaleDateString();
        
                    // Display the current time in milliseconds
                    millisecondsElement.textContent =  currentDate.getTime();
                }
        
                // Call the updateDayAndTime function to display the initial day and milliseconds
                updateDayAndTime();
        
                // Update the day and milliseconds every second (1000 milliseconds)
                setInterval(updateDayAndTime, 1000);