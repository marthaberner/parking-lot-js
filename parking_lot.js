var ParkingLot = function (spaces) {
  this.spaces = [];
  for (var i = 0; i < spaces; i++) {
    this.spaces.push("(empty)");
  }

  this.vacancies = this.countVacancies();
};

ParkingLot.prototype.countVacancies = function () {
  var count = 0;

  for (var i = 0; i < this.spaces.length; i++) {
    if(this.spaces[i] === "(empty)")
      count++;
  }

  return count;
};

ParkingLot.prototype.summary = function() {
  var output = [];

  for (var i = 0; i < this.spaces.length; i++) {
    output.push("Position " + (i + 1) + ": " + this.spaces[i]);
  }

  return output;
}

ParkingLot.prototype.park = function(licensePlate) {
  var parked = false;

  for (var i = 0; i < this.spaces.length; i++) {
    if(!parked && this.spaces[i] === "(empty)") {
      this.spaces[i] = licensePlate;
      parked = true;
    }
  }

  this.vacancies = this.countVacancies();
}

ParkingLot.prototype.leave = function(licensePlate) {
  var left = false;

  for (var i = 0; i < this.spaces.length; i++) {
    if(!left && this.spaces[i] === licensePlate) {
      this.spaces[i] = "(empty)";
      left = true;
    }
  }

  this.vacancies = this.countVacancies();
}

ParkingLot.prototype.compact = function() {
  var vacant = [];
  var occupied = [];

  //Create arrays of subscripts of those elements of this.spaces that are either vacant or occupied
  for (var i = 0; i < this.spaces.length; i++) {
    if(this.spaces[i] === "(empty)")
      vacant.push(i);
    else
      occupied.push(i);
  }

  //Copy cars from later occupied spaces into earlier vacant spaces, then set later space to (empty)
}

module.exports = ParkingLot;
