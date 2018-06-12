var ticket = function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = [];
}

ticket.prototype.pricing = function (price) {
  var price = 5
  if (this.age >= 65) {
    return this.price = 5;
    console.log("senior discount");
  }
  else if (this.age < 65) {
    return this.price = 10;
  }
}

ticket.prototype.yourTicket = function (yourTicket) {
  return this.movie +" "+ this.time +" "+ this.age +" "+ this.price
};


// UI Logic

$(function() {
  $("#ticketForm").submit(function(event) {
    event.preventDefault();
    console.log("It works");
    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = $("#age").val();

    var individualTicket = new ticket(movie, time, age)

    $("#output").text(individualTicket.yourTicket());
    $("#output").append(individualTicket.pricing());
    console.log(individualTicket);
  });

});
