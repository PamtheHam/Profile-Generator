const Engineer = require("../Lib/Engineer");

describe("Engineer", () => {
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