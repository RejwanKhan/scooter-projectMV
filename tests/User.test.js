const User = require("../src/User");

describe("testing if User has the correct properties/methods", () => {
  it("has correct properties", () => {
    const user1 = new User("Rejwan", "password123", 18);
    expect(user1).toHaveProperty("name", "Rejwan");
    expect(user1).toHaveProperty("password", "password123");
    expect(user1).toHaveProperty("age"), 18;
    expect(user1).toHaveProperty("loggedIn");
  });

  it("has correct methodNames", () => {
    const user2 = new User("Rufus", "dufus123", 4);
    expect(user2).toHaveProperty("login");
    expect(user2).toHaveProperty("logout");
  });
});

describe("testing functionality of login()", () => {
  it("should login user", () => {
    const user3 = new User("Harry", "poter123", 18);
    expect(() => user3.login("poter123")).not.toThrow(Error);
  });

  it("shouldn't login user and throw Error", () => {
    const user4 = new User("Fargo", "kingFargo123", 2);
    expect(() => user4.login("kingFargo129")).toThrow(Error);
  });
});

describe("testing functionality of logout()", () => {
  it("should logout user", () => {
    const user5 = new User("Goop", "ducktales123", 18);
    user5.loggedIn = true;
    user5.logout();
    expect(user5.loggedIn).toBeFalsy();
  });
});

// User tests here

// test username

// test password

// test age

// test login

// test logout
