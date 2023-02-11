class Scooter {
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial + 1;
    this.charge = 100;
    this.isBroken = false;
  }
  // rent() {
  //   if (this.charge > 20 && this.isBroken === false) {
  //     this.station = null;
  //     this.station = this.user; //USER NEEDS TO USE PARAMATER FROM SCOOTER APP
  //   }
  // }
  rent() {
    if (this.charge < 20 || this.isBroken === true) {
      throw new Error("cannot be rented");
    }
  }
  dock(Station) {
    this.station = Station;
    this.user = null;
  }

  recharge() {
    const recharge = setInterval(() => {
      if (this.charge < 100) {
        this.charge++;
        console.log(`The battery is currently at ${this.charge}%`);
      } else {
        clearInterval(recharge);
      }
    }, 1000);
  }

  requestRepair() {
    setInterval(() => {
      this.isBroken = false;
      console.log("repair completed");
    }, 5000);
  }
  //   rent()

  // If the Scooter is charged above 20% and not broken, remove it from its station, check it out to user.

  // Otherwise, throw an error scooter needs to charge or scooter needs repair.
}

module.exports = Scooter;

// const sc1 = new Scooter("Camden");
// sc1.charge = 19;
// sc1.isBroken = true;
// console.log(sc1);
// setInterval(() => console.log(sc1), 10000);
// sc1.requestRepair();

// sc1.recharge();
