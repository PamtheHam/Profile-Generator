const Intern = require("../Lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {

      it("should check if the object is a new Intern class", () => {
        const newIntern = new Intern();
        expect(newIntern instanceof Intern).toEqual(true);
});

it("should return the name, id, email, and school of the Intern", () => {
      const name = "Pam";
      const idNumber = "052594";
      const emailAd = "Hammondpamelac@gmail.com";
      const bigSchool= "FHSU";
      const newIntern = new Intern(name, idNumber, emailAd, bigSchool);

      expect(newIntern.name).toEqual(name);
      expect(newIntern.id).toEqual(idNumber);
      expect(newIntern.email).toEqual(emailAd);
      expect(newIntern.school).toEqual(bigSchool);
});

});

describe("get methods for the school and role username", () => {

it("should call getSchool() and return the given school from the user", () => {
    const name = "Pam";
    const idNumber = "052594";
    const emailAd = "Hammondpamelac@gmail.com";
    const bigSchool = "FHSU";
    const newIntern = new Intern(name, idNumber, emailAd, bigSchool);
    expect(newIntern.getSchool()).toEqual(bigSchool);
});

it("should call getRole() and return the given role of Intern from the user", () => {
    const name = "Pam";
    const idNumber = "052594";
    const emailAd = "Hammondpamelac@gmail.com";
    const newIntern = new Intern(name, idNumber, emailAd);
    expect(newIntern.getRole()).toEqual("Intern");
});
});

});