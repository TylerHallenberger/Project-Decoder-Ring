const { caesar } = require("../src/caesar");
const { expect } = require("chai");

   describe("caesar()", () =>{
    let input = "Clayton Allmond";
    let shift = 7;

    it("is a function", () =>{
        expect(caesar).to.be.a("function");
    })

    it("returns false for incorrect shifts", () =>{
        const shiftValues = [0, -26, 26, null, undefined];
        const actual = shiftValues.every((shift) => {
          return !caesar(input, shift);
        });
        expect(actual).to.be.true;
      });
    
    it("returns a result for all valid shift numbers", () => {
        const shiftValues = [-25, -1, 1, 25];
        const actual = shiftValues.every((shift) => {
          return caesar(input, shift);
        });
        expect(actual).to.be.true;
    });


    describe("encoding a message", () => {
        it("returns a string", () => {
              const expected = "string";
              const actual = typeof caesar(input, shift);
              expect(actual).to.equal(expected);
            });
    })
        it("returns correct length", () => {
        const expected = input.length;
        const actual = caesar(input, shift).length;
        expect(actual).to.equal(expected);
      });

      it("encodes '*Clayton L. Allmond!' shift+1 correctly", () => {
        input = "*Clayton L. Allmond!";
        shift = 1;
        const expected = "*dmbzupo m. bmmnpoe!";
        const actual = caesar(input, shift);
        expect(actual).to.deep.equal(expected);
      });


      it("encodes '*Clayton L. Allmond!' shift-1 correctly", () => {
        input = "*Clayton L. Allmond!";
        shift = -1;
        const expected = "*bkzxsnm k. zkklnmc!";
        const actual = caesar(input, shift);
        expect(actual).to.deep.equal(expected);
      });
    });

    describe("decoding a message", () => {
        it("decodes '*dmbzupo m. bmmnpoe!' shift-1 correctly", () => {
          input = "*dmbzupo m. bmmnpoe!";
          shift = -1;
          const expected = "*clayton l. allmond!";
          const actual = caesar(input, shift);
          expect(actual).to.deep.equal(expected);
        });

        it("decodes '*bkzxsnm k. zkklnmc!' shift+1 correctly", () => {
          input = "*bkzxsnm k. zkklnmc!";
          shift = 1;
          const expected = "*clayton l. allmond!";
          const actual = caesar(input, shift);
          expect(actual).to.deep.equal(expected);
        });
      });