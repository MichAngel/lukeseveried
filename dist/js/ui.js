//Event Data

const data = {
    //Below hard coded data to be switched to variable.
    event: 'Open Mic Night',
    location: 'Seattle, Wa',
    date: 'Some Sunday',
    time: '8:30pm'
}
console.log(data.value);

//Define UI Class

class CalendarUI() {
    this.calendar = document.getElementById('calendar');
}

showCalendar() {
    this.calendar.innerHTML =
        <div class="show-head text-center">

        </div>
}