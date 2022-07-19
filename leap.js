// var year=prompt("Enter the year:");
// if ((year % 4==0) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }

var year = prompt('Enter a year:');

function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


checkLeapYear(year);
 