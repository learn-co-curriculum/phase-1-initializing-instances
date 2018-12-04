describe("breakfast", () => {
  it("has a class of breakfast", () => {
    expect(new Breakfast()).to.be.an.instanceof(Breakfast);
  })
  it("creates a new breakfast with the correct parameters", () => {
    bfast = new Breakfast('eggs', 'juice')
    expect(bfast).to.equal({food: 'eggs', drink: 'juice'})
  })
})

describe("lunch", () => {
  it("has a class of lunch", () => {
    expect(new Lunch()).to.be.an.instanceof(Lunch);
  })
})

describe("dinner", () => {
  it("has a class of dinner", () => {
    expect(new Dinner()).to.be.an.instanceof(Dinner);
  })
})