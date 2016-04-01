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
  var occupied = [];

  //Create arrays of subscripts of those elements of this.spaces that are either vacant or occupied
  for (var i = 0; i < this.spaces.length; i++) {
    if(this.spaces[i] !== "(empty)")
      occupied.push(i);
  }

  var halfLength = this.spaces.length % 2 === 0 ? this.spaces.length / 2 : this.spaces.length / 2 - 0.5;

  for (var i = 0; i < halfLength; i++) {
    if(this.spaces[i] === "(empty)") {
      this.spaces[i] = this.spaces[occupied[occupied.length - 1]];
      this.spaces[occupied[occupied.length - 1]] = "(empty)";
      occupied.pop();
    }
  }
}

module.exports = ParkingLot;
