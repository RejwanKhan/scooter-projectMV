const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  static stations = [{ Camden: [] }, { Brent: [] }, { Islington: [] }];
  static registeredUsers = [];

  //methods

  static registerUser(username, password, age) {
    if (age < 18) {
      throw new Error("too young to register");
    }

    const allUsers = ScooterApp.registeredUsers.filter((item) =>
      item.hasOwnProperty(username)
    );

    let user = new User(username, password, age);

    if (allUsers.length === 0 && age >= 18) {
      let store = { [username]: user };
      ScooterApp.registeredUsers.push(store);
      console.log("user has been registered");
    } else {
      throw new Error("already registered");
    }
  }

  static loginIn(username, password) {
    const allUsers = ScooterApp.registeredUsers.flatMap((item) =>
      Object.keys(item)
    );
    let findUser = allUsers.indexOf(username);

    if (findUser === -1) {
      throw new Error("incorrect Username");
    }

    if (
      ScooterApp.registeredUsers[findUser][username]["password"] === password
    ) {
      console.log("user has been logged in");
      ScooterApp.registeredUsers[findUser][username]["loggedIn"] = true;
    } else {
      throw new Error("Password is incorrect");
    }
  }

  static logout(username) {
    const allUsers = ScooterApp.registeredUsers.flatMap((item) =>
      Object.keys(item)
    );
    let findUser = allUsers.indexOf(username);
    if (findUser === -1) {
      throw new Error("no such user is logged in");
    } else {
      console.log("user is logged out");

      ScooterApp.registeredUsers[findUser][username]["loggedIn"] = false;
    }
  }

  static createScooter(station) {
    const allStations = ScooterApp.stations.flatMap((item) =>
      Object.keys(item)
    );
    let findStation = allStations.indexOf(station);
    if (findStation === -1) {
      throw new Error("no such station");
    } else {
      console.log("created new scooter");
      const scooter = new Scooter(station);
      ScooterApp.stations[findStation][station].push(scooter);
      console.log(ScooterApp.stations);
    }
  }

  static dockScooter(scooter, station) {
    const allStations = ScooterApp.stations.flatMap((item) =>
      Object.keys(item)
    );
    let findStation = allStations.indexOf(station);

    if (findStation === -1) {
      throw new Error("no such station");
    }

    if (ScooterApp.stations[findStation][station].includes(scooter)) {
      throw new Error("scooter already at station");
    } else {
      ScooterApp.stations[findStation][station].push(scooter);
      scooter.user = null;
    }
  }
  //
  static rentScooter(scooter, user) {
    if (scooter.user) {
      throw new Error("Scooter already rented");
    }

    const station = scooter.station;
    const allStations = ScooterApp.stations.flatMap((item) =>
      Object.keys(item)
    );

    const allUsers = ScooterApp.registeredUsers.flatMap((item) =>
      Object.keys(item)
    );

    let findUser = allUsers.indexOf(user);

    if (findUser === -1) {
      throw new Error("not a registered user");
    }

    let findStation = allStations.indexOf(station);

    let findScooterInStation =
      ScooterApp.stations[findStation][station].indexOf(scooter);

    ScooterApp.stations[findStation][station].splice(findScooterInStation, 1);
    scooter.rent();
    scooter.station = null;
    scooter.user = user;
  }

  static print() {
    const allUsers = ScooterApp.registeredUsers.flatMap((item) =>
      Object.keys(item)
    );
    const allStations = ScooterApp.stations.flatMap((item) =>
      Object.keys(item)
    );
    console.log(allStations);

    console.log(
      `Here is a list of all registered users: ${allUsers}, there are in total ${allUsers.length}`
    );
    console.log(
      `here is a list of how many stations there are: ${allStations}, there are in total ${allStations.length}`
    );

    //Log the list of stations and how many scooters are at each station to the console.
    for (let i = 0; i < ScooterApp.stations.length; i++) {
      const stationName = allStations[i];

      console.log(
        `In ${stationName} there are ${ScooterApp.stations[i][stationName].length} scooters docked`
      );
    }
  }

  //
}

module.exports = ScooterApp;

// const test = [
//   { rejwan: ["password123", 18] },
//   { rufus: ["dufus123", 4] },
//   { diogo: ["diogo123", 18] },
// ];
// console.log(test);
// console.log(test[1].hasOwnProperty("rufus"));
// const holder = "word";

// const word = "sudas";

// console.log({ [word]: "fish" });

//STORE USERNAME IN A VARIABLE AND USE SQUARE BRACKETS TO GET THE VALUE OF THAT VARIABLE

// ScooterApp.registerUser("Rejwan", "password123", 18);
// const storage = [];

// const registerUser = (username, password, age) => {
//   let store = { [username]: [password, age] };
//   console.log(store);

//   if (1 === 1) {
//     console.log("working?");
//     storage.push(store);
//   }

//   console.log(storage);
// };

// registerUser("Rejwan", "password", 18);
// registerUser("Diogo", "diogo123", 12);
// registerUser("Fatima", "fatima123", 14);

ScooterApp.registerUser("testy", "password", 18);

ScooterApp.registerUser("resty", "resty123", 20);

// ScooterApp.registerUser("festy", "festy123", 12);
ScooterApp.registerUser("besty", "besty123", 30);

// ScooterApp.registerUser("besty", "besty123", 30);

// console.log(ScooterApp.registeredUsers);

// /*
// loginUser(username, password)

// Locate the registered user by name and call its login method. Log to the console that the user has been logged in.

// If the user cannot be located or if the password is incorrect, then throw an error: Username or password is incorrect.
// */

// console.log(ScooterApp.rUsers);
// console.log(ScooterApp.registeredUsers);
// console.log("BREAK");
// const allUsers = ScooterApp.registeredUsers.flatMap((item) =>
//   Object.keys(item)
// );

// ScooterApp.loginIn("besty", "besty123");

// ScooterApp.logout("best");

const allStations = ScooterApp.stations.flatMap((item) => Object.keys(item));
let findStation = allStations.indexOf("Islington");
console.log(allStations);
console.log(findStation);

console.log(ScooterApp.stations[0]["Camden"]);
ScooterApp.createScooter("Camden");
ScooterApp.createScooter("Camden");
ScooterApp.createScooter("Camden");
// ScooterApp.createScooter("Harrow");
ScooterApp.createScooter("Brent");
ScooterApp.createScooter("Brent");
ScooterApp.createScooter("Islington");
const fix = new Scooter("Islington");
console.log(ScooterApp.stations);
console.log(ScooterApp.stations[2], "dsada");

// ScooterApp.stations[2].push(fix);
// console.log(ScooterApp.stations[2].Islington.push(fix));

// console.log(ScooterApp.stations[2]);

// console.log(ScooterApp.stations[2].Islington.includes(fix));
ScooterApp.dockScooter(fix, "Islington");
console.log(ScooterApp.stations);

// const newscoot = new Scooter("Harrow");
// ScooterApp.dockScooter(fix, "Islington");

console.log(ScooterApp.stations[2]["Islington"].includes(fix));
console.log(ScooterApp.registeredUsers);
console.log(ScooterApp.stations);

const stationa = "Islington";
console.log(ScooterApp.stations[2][stationa].includes(fix));
// console.log(fix.charge, "21321");
// fix.charge = 19;
// console.log(fix.charge, "1232121");
ScooterApp.rentScooter(fix, "besty");
console.log(ScooterApp.stations);

ScooterApp.print();
console.log(ScooterApp.stations);

/*ABOVE IS TESTED INTERACTIONS // DIDN'T KNOW IF I SHOULD DELETE EVERYTHING OUTSIDE THE CLASS
(I KNOW THIS WILL BE EXPORTED ASWELL BUT GIVES YOU THE ABILITY TO RUN THIS SPECIFICALLY AND SEE FINAL INTERACTION)
If you want to delete all the console.log go ahead but to see what the final output /print would be I don't recommend 
*/
