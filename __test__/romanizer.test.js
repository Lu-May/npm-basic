import {replacedString} from "../src/romanizer";
describe('transform', () => {
    it('should return X when input is 10', () => {
        const result = replacedString(10);

        expect(result).toEqual("X");
    });
});