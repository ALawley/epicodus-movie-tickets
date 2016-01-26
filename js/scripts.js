function Ticket(movie, age, time, screenType) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.screenType = screenType;
}

Ticket.prototype.price = function() {
  var ticketPrice = 11;
  if (this.age >= 65) {
    ticketPrice -= 2;
  } else {}
  if (this.time === "1:00 PM") {
    ticketPrice -= 2;
  } else {}
  return "$" + ticketPrice;
}
