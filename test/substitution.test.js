const {expect}  = require("chai");
const {substitution} = require("../src/substitution.js")

describe ("substitution", () => {
    it("should return false if alphabet is longer than 26 characters", () => {
        const input = "You are an excellent spy";
        const alphabet = "aaaaaaa";
        actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if alphabet is not submitted", () => {
        const input = "You are an excellent spy";
        actual = substitution(input);
        expect(actual).to.be.false;
    });
    it("should return false if alphabet is shorter than 26 characters", () => {
        const input = "You are an excellent spy";
        const alphabet = "1abcdefghijklmnopqrstuvwx";
        actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if every character of alphabet is not unique", () => {
        const input = "You are an excellent spy";
        const alphabet = "abcdefghiiklmnopqrstuvwxyz";
        actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should encode an English message", () => {
        const input = "you are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should decode a message to English", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "you are an excellent spy";
        actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    });
});