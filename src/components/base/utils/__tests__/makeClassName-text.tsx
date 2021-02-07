import * as React from "react";
import makeClassName from "../makeClassName";

describe('Testing making class name', () => {
    it('should have equal length', () => {
        const lengthOfClass = 10;
        const output = (
            makeClassName(10)
        );
        expect(output.length).toEqual(lengthOfClass);
    })

    it('should be string', () => {
        const output = (
            makeClassName(10)
        );
        expect(typeof output).toEqual('string');
    })

    it('should have not numbers', () => {
        const output = (
            makeClassName(10)
        );
        expect(/[0-9]/.test(output)).toEqual(false);
    })
});
