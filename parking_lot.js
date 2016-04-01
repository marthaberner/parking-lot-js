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

module.exports = ParkingLot;
