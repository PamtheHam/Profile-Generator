const Engineer = require("../Lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {

    it("should check if the object is a new Engineer class", () => {
            const newEngineer = new Engineer();
            expect(newEngineer instanceof Engineer).toEqual(true);
    });
  
    it("should return the name, id, email, and github username of the Engineer", () => {
          const name = "Pam";
          const idNumber = "052594";
          const emailAd = "Hammondpamelac@gmail.com";
          const githubUser = "PamtheHam";
          const newEngineer = new Engineer(name, idNumber, emailAd, githubUser);

          expect(newEngineer.name).toEqual(name);
          expect(newEngineer.id).toEqual(idNumber);
          expect(newEngineer.email).toEqual(emailAd);
          expect(newEngineer.github).toEqual(githubUser);
    });

  });

  describe("get methods for the role and github username", () => {

    it("should call getGithub() and return the given github username from the user", () => {
        const name = "Pam";
        const idNumber = "052594";
        const emailAd = "Hammondpamelac@gmail.com";
        const githubUser = "PamtheHam";
        const newEngineer = new Engineer(name, idNumber, emailAd, githubUser);
        expect(newEngineer.getGithub()).toEqual(githubUser);
    });
    
    it("should call getRole() and return the given role of engineer from the user", () => {
        const name = "Pam";
        const id = "052594";
        const email = "Hammondpamelac@gmail.com";
        const newEngineer = new Engineer(name, id, email);
        expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });

});
