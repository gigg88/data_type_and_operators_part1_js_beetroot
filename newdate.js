// Request a date (dd:mm:yy) and put out the one that goes after it.
// Pay attention to the start of a new month, a new year, and also leap years.

const currentDate = new Date ();

currentDate.setDate(currentDate.getDate() + 1);

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2,'0');
const day = currentDate.getDate();

const requestDate = `${day}:${month}:${year}`;

alert(`${requestDate}`);