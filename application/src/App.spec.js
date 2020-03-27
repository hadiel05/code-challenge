describe("My Test Suite", () => {
  it("My Test Case", () => {
    const chickens = true;
    const Antarctica = {
      penguins: jest.fn()
    };
    Antarctica.penguins();
    expect(chickens).toEqual(true);
    expect(Antarctica.penguins).toHaveBeenCalled();
  });
});
