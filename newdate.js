// Request a date (dd:mm:yy) and put out the one that goes after it.
// Pay attention to the start of a new month, a new year, and also leap years.

const currentDate = new Date ();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const requestDate = `${day}:${month}:${year}`;
alert(`${requestDate}`);