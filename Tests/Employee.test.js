const Employee = require("../Lib/Employee");

describe("Employee", () => {
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