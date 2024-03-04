import {expect} from 'chai';
export class Assertions {
    public async expectToNotEqual(result: any, expectedResult: any): Promise<void> {
        expect(result).to.not.equal(expectedResult);
    }
}