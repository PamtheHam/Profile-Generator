const Manager = require("../Lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should check if the object is a new Manager class", () => {
        const newManager = new Manager();
        expect(newManager instanceof Manager).toEqual(true);
    })

    it("should return the name, id, email, and office number of the Manager", () => {
      const name = "Pam";
      const idNumber = "052594";
      const emailAd = "Hammondpamelac@gmail.com";
      const officeNumber= "1234";
      const newManager = new Manager(name, idNumber, emailAd, officeNumber);

      expect(newManager.name).toEqual(name);
      expect(newManager.id).toEqual(idNumber);
      expect(newManager.email).toEqual(emailAd);
      expect(newManager.officeNumber).toEqual(officeNumber);
});

it("should return the given role about the Manager from the user", () => {
  const name = "Pam";
  const idNumber = "052594";
  const emailAd = "Hammondpamelac@gmail.com"
  const newManager = new Manager(name, idNumber, emailAd);
  expect(newManager.getRole()).toEqual("Manager");
});

});
});