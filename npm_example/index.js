import dayjs from "dayjs"; 
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

const date = new Date();
console.log("No:: ", date);
const minutes = 30;
date.setMinutes(date.getMinutes() - minutes);
console.log("Before:: ", date);
//const number = Number("20");


const now = dayjs();
console.log("Now :: ", now.toISOString);
// console.log("Dayjs date::", now);



now.subtract(30, "m");
console.log("Before :: ", now.toISOString());

console.log("Relative Time :: ", now.fromNow());
console.log('Relative Time Subtract :: ', now.subtract(30, "m").fromNow());