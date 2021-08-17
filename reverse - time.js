/* REVERSE ENGINEER

INPUT LOOKS LIKE THIS:

mon
15
399
245

OUTPUT LOOKS LIKE THIS:

mon 21:43:05


WHAT HAPPENS:
We take the 4 lines of input and convert them into a single line of output. We convert the seconds 
into minutes if >60, minutes into hours if >60, add leading 0s if anything is <10, and then add a 
day if hours are >24.

TRICKY PORTION:
We need to deal with cases where we need to add a day to input Sunday. We do that by 
*/

'use strict';		// because I wanna have anything tip-top :)

// sample inputs (emulating line-by-line input):
// const lines=['mon','15','399','245'];
// const lines=['sun','42','399','245'];
const lines=['sun','23','58','120'];

let day = lines[0];
let hours = parseInt(lines[1]);
let minutes = parseInt(lines[2]);
let seconds = parseInt(lines[3]);

console.log(day, hours, minutes, seconds);

let result= "";
let days = ['mon','tue','wed','thu','fri','sat','sun'];

// get rid of excesses in everything:
while (seconds>=60) {
	seconds-=60;
	minutes+=1;
}
while (minutes>=60) {
	minutes-=60;
	hours+=1;
}
while (hours>=24) {
	console.error(`index of ${day} is: ${days.indexOf(day)}`);
	console.error(`hours are ${hours}, days are ${day}`);
	hours-=24;
	// if the day is Sunday, we need to go back to Monday (start of the array) - so from element 6 we go to element 0
	day=days[(days.indexOf(day)+1)%7];
	console.error(`index of ${day} is: ${days.indexOf(day)}`);
	console.error(`hours are ${hours}, days are ${day}`);
}

// pad anything single-digit with a starting zero:
hours = hours.toString().padStart(2,"0");
minutes = minutes.toString().padStart(2,"0");
seconds = seconds.toString().padStart(2,"0");

result = `${day} ${hours}:${minutes}:${seconds}`;

console.log(result);

