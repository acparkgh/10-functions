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