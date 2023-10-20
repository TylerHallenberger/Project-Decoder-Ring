// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'clayton' to 31131145444333 ", () => {
      expect(polybius("clayton")).to.equal("31131145444333");
    });

    it("should maintain spaces", () => {
      expect(polybius("clayton allmond")).to.equal("31131145444333 11131323433341");
    });
    it("should ignore capital letters", () => {
      expect(polybius("ijIJazAZ")).to.equal("4242424211551155");
    });
  });
  describe("decoding", () => {
    it("should decode 31131145444333 to clayton", () => {
      expect(polybius("31131145444333", false)).to.eql("clayton");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius("4242424211551155", false)).to.eql(
        "(i/j)(i/j)(i/j)(i/j)azaz"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius("3113114544 4333", false)).to.eql("clayt on");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});