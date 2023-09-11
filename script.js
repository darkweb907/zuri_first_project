document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function OurWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date();
        const dayOfWeek = days[date.getDay()]
        return dayOfWeek;
    }

    // Function to update the current day of the week and UTC time
    function updateCurrentInfo() {
        const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

        const Week = OurWeekWeek();
        const currentUTCTime = new Date().getTime();

        dayOfTheWeekElement.textContent = `Current Day of the Week: ${Week}`;
        utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
    }

    // Update the current information every second
    updateCurrentInfo();
    setInterval(updateCurrentInfo, 1000);
});

