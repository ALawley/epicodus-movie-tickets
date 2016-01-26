describe("Ticket", function() {
  it("creates a ticket object and store input properties", function() {
    var testTicket = new Ticket("Star Wars", "18", "5:00 PM", "regular");
    expect(testTicket.movie).to.equal("Star Wars");
    expect(testTicket.age).to.equal("18");
    expect(testTicket.time).to.equal("5:00 PM");
    expect(testTicket.screenType).to.equal("regular");
  });
  it("returns the price of the ticket", function() {
    var testTicket = new Ticket("Star Wars", "18", "5:00 PM", "regular");
    expect(testTicket.price()).to.equal("$11");
  });
  it("decreases price by $2 for seniors", function() {
    var testTicket = new Ticket("Star Wars", "70", "5:00 PM", "regular");
    expect(testTicket.price()).to.equal("$9");
  });
  it("decreases price by $2 for matinees", function() {
    var testTicket = new Ticket("Star Wars", "18", "1:00 PM", "regular");
    expect(testTicket.price()).to.equal("$9");
  });
  it("increases price by $3 for midnight showings", function() {
    var testTicket = new Ticket("Star Wars", "18", "12:00 AM", "regular");
    expect(testTicket.price()).to.equal("$14");
  });
  it("decreases price by $3 for old movies", function() {
    var testTicket = new Ticket("Bladerunner", "18", "5:00 PM", "regular");
    expect(testTicket.price()).to.equal("$8");
  });
  it("increases price by $2.5 for IMAX movies", function() {
    var testTicket = new Ticket("Star Wars", "18", "5:00 PM", "IMAX");
    expect(testTicket.price()).to.equal("$13.5");
  });
});
