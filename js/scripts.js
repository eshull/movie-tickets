// constructor for ticket
var ticket = function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = [];
}

// method for price
ticket.prototype.pricing = function (price) {
  if (this.age == "true" || this.time < 17) {
    console.log(this.age);
    console.log("discount");
    return this.price = 5;
  }
  else if (this.age == "false" || this.time >= 17){
    return this.price = 10;
  }
}

ticket.prototype.timeChange = function (hour) {
  console.log(hour);
  if (this.time < 12) {
    return this.time + ":00am "
  } else if (this.time >= 12) {
    return (this.time - 12) + ":00pm "

  }
}

ticket.prototype.yourMovie = function (yourMovie) {
  return this.movie
};

function timeSelector(movieTitle) {
  var wonderwoman = $("input:radio[name=wonderwoman]:checked").val();
  var batman = $("input:radio[name=batman]:checked").val();
  var superman = $("input:radio[name=superman]:checked").val();

    if (batman > 0) {
      return batman;
    } else if (wonderwoman > 0) {
      return wonderwoman
    } else if (superman > 0) {
      return superman;
    }
}

function movieSelector(movieTitle) {
  var wonderwoman = $("input:radio[name=wonderwoman]:checked").val();
  var batman = $("input:radio[name=batman]:checked").val();
  var superman = $("input:radio[name=superman]:checked").val();

    if (batman > 0) {
      console.log("wonderwoman reached");
      return "Batman Returns";
    } else if (wonderwoman > 0) {
      console.log("wonderwoman reached");
      return "Wonder Woman";
    } else if (superman > 0) {
      return "Superman";
    }
}

// method to concatenate the information into a div

// UI Logic

$(function() {
  $("#ticketForm").submit(function(event) {
    event.preventDefault();
    var movie = movieSelector();
    var time = timeSelector();
    // var age = $("#age").val();
    // var age = $("#age").val();
    var age = $("input:radio[name=age]:checked").val();
    var individualTicket = new ticket(movie, time, age)


    $("#timeOfMovie").append(individualTicket.timeChange());
    $("#titleOfMovie").append(individualTicket.yourMovie());
    $("#priceOfMovie").append(individualTicket.pricing());

    console.log("This is age" + age);
    console.log(individualTicket);
    $("#ticketForm")[0].reset();
    $("#empty").clear();
  });

});
