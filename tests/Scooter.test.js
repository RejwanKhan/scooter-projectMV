const Scooter = require("../src/Scooter");
const User = require("../src/User");

beforeEach(() => {
  Scooter.nextSerial = 1;
});

describe("testing Properties of Scooter", () => {
  it("testing if an insttance has correct properties of Scooter", () => {
    const scooter1 = new Scooter("Camden");
    expect(scooter1).toHaveProperty("station");
    expect(scooter1).toHaveProperty("user");
    expect(scooter1).toHaveProperty("serial");
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("isBroken");
  });

  it("testing if Scooter Class has static property nextSerial", () => {
    expect(Scooter).toHaveProperty("nextSerial");
  });
});

describe("testing whether Scooter instances has correct Method", () => {
  const scooter2 = new Scooter("Islington");
  expect(scooter2).toHaveProperty("rent");
  expect(scooter2).toHaveProperty("dock");
  expect(scooter2).toHaveProperty("recharge");
  expect(scooter2).toHaveProperty("requestRepair");
});

describe("tesiting if new scooter instance assigned to correct values", () => {
  const scooter3 = new Scooter("Camden");
  expect(scooter3).toHaveProperty("station", "Camden");
  expect(scooter3).toHaveProperty("user", null);
  expect(scooter3).toHaveProperty("serial");
  expect(Scooter.nextSerial).toBe(1);
  expect(scooter3.charge).toBe(100);
  expect(scooter3.isBroken).toBeFalsy();
});
