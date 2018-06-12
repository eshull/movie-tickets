var ticket = function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}

ticket.prototype.price = function (cost) {

};

ticket.prototype.seniorDiscount = function (price) {
  if (this.age >= 65) {
    return this.price = price - 2;

  }
  else if (this.age < 65) {
    return this.price;
  }
}
