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
});
