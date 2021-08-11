const Intern = require("../Lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
        // Arrange
        
        // Act
        const obj = new Arithmetic();
        // Assert
        expect("number" in obj).toEqual(true);
      });
    });
});