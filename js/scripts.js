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
  } else if (this.time === "12:00 AM") {
    ticketPrice += 3;
  } else {}
  if (this.movie === "Bladerunner") {
    ticketPrice -= 3;
  } else {}
  if (this.screenType === "IMAX") {
    ticketPrice += 2.5;
  }else {}
  return "$" + ticketPrice.toFixed(2);
}

$(document).ready(function() {
  $("form#ticket-calculator").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("select#movie").val();
    var inputTime = $("select#time").val();
    var inputAge = parseInt($("input#age").val());
    var inputScreenType = $("select#screenType").val();

    var newTicket = new Ticket(inputMovie, inputAge, inputTime, inputScreenType);

    $(".result-price").text(newTicket.price());
    $(".movie-name").text(newTicket.movie);
    $(".movie-time").text(newTicket.time);
    $(".movie-screen").text(newTicket.screenType);
    $("#results").show();
  });
});
