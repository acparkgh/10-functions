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
};

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

// const greet = function (greeting) {
//   console.log(greeting);
//   return (
//     function (name) {
//       console.log(`${greeting} ${name}`);
//     }
//   )
// }

// const greet = (greeting) => { return (name) => {console.log(`${greeting} ${name}`)} }
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet("Hi");

greeter("Andrew");
greeter("Jonas");
greet("Hello")("Kim");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function () {}
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passengerName: passengerName })
    this.bookings.push( {
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    } );
  }
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
}

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss)

book.apply(eurowings, [856, "Mike Smith"]);
console.log(eurowings);

const flightInfo = [123, "Andrew Park"];
book.call(eurowings, ...flightInfo);
console.log(eurowings);

const reserveSeat = function (flightNum, passengerName) {
  console.log(
    `${passengerName} reserved a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  // this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passengerName: passengerName })
  this.bookings.push( {
    flight: `${this.iataCode}${flightNum}`,
    passengerName,
  } );
}

reserveSeat.call(eurowings, 987, "John Smith");
console.log(eurowings);

reserveSeat.apply(lufthansa, [555, "Lucky Start"]);
console.log(lufthansa);