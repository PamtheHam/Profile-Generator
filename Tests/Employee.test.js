const Employee = require("../Lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should check if the object is a new Employee class", () => {
          const newEmployee = new Employee();
          expect(newEmployee instanceof Employee).toEqual(true);
      });

      it("should return the name of the employee", () => {
        const name = "Pam";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toEqual(name);
      });

      it("should return the given id from the user", () => {
        const name = "Pam";
        const idNumber = "052594";
        const newEmployee = new Employee(name, idNumber);
        expect(newEmployee.id).toEqual(idNumber);
    });

    it("should return the given email address from the user", () => {
      const name = "Pam";
      const idNumber = "052594";
      const emailAd = "Hammondpamelac@gmail.com"
      const newEmployee = new Employee(name, idNumber, emailAd);
      expect(newEmployee.email).toEqual(emailAd);
  });

  it("should return the given role about the employee from the user", () => {
    const name = "Pam";
    const idNumber = "052594";
    const emailAd = "Hammondpamelac@gmail.com"
    const newEmployee = new Employee(name, idNumber, emailAd);
    expect(newEmployee.getRole()).toEqual("Employee");
});

});
});

