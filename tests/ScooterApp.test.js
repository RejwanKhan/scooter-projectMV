const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

describe("Testing if ScooterApp has correct properties", () => {
  it("ScooterApp has correct properties (STATIC) ", () => {
    expect(ScooterApp).toHaveProperty("stations");
    expect(ScooterApp).toHaveProperty("registeredUsers");
    expect(ScooterApp).toHaveProperty("registerUser");
    expect(ScooterApp).toHaveProperty("logoutUser");
    expect(ScooterApp).toHaveProperty("createScooter");
    expect(ScooterApp).toHaveProperty("dockScooter");
    expect(ScooterApp).toHaveProperty("rentScooter");
    expect(ScooterApp).toHaveProperty("print");
  });
});

describe("Testing functionality of registerUser method", () => {
  expect(() => Scooter.registerUser("Simon", "simon123", 12)).toThrow(Error);
});
