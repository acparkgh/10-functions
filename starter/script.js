'use strict';

const booking = [];

const createBooking = function (
  flightNum,
  numPassengers = 99,
  price = 999,
) {
  const bookingObj = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(bookingObj);
  booking.push(bookingObj);
}

createBooking("LH123");
createBooking("AB373", 2, 199);
createBooking("BE372", undefined, 200);
console.log(booking);

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 123456789,
}

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  console.log();
  // passenger.name = "Mr." + passenger.name;
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123456789) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  };
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// console.log(jonas.passport);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);
// console.log(jonas.passport);


const oneWord = function (str) {
  return (
    str.replace(/ /g, "")
  );
};

const upperFirstWord = function (str) {
    console.log(str.split(" "));
  const [first, ...rest] = str.split(" ");
    console.log(first);
    console.log(rest);
  return (
      // console.log([first.toUpperCase(), ...rest])
    [ first.toUpperCase(), ...rest ].join(" ")
  );
};

console.log(upperFirstWord("hello world everyone"));
console.log(oneWord("and rew"));

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("javaScript is the best", upperFirstWord);
transformer("javaScript is the best", oneWord);

const high5 = function () {
  console.log("✋");
};

// document.body.addEventListener("click", high5);
document.querySelector("h1").addEventListener("click", high5);





