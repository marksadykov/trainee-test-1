import * as React from "react";
import splitString from "../splitString";

describe('splitString', () => {
    it('should smoke correctly with 18+', () => {
        const output = (
            splitString('18+')
        );
        expect(output).toEqual(['1', '8', '+']);
    })
});

describe('splitString', () => {
    it('should smoke correctly with 1234', () => {
        const output = (
            splitString('1234')
        );
        expect(output).toEqual(['12', '3', '4']);
    })
});

describe('splitString', () => {
    it('should smoke correctly with 1234567890', () => {
        const output = (
            splitString('1234567890')
        );
        expect(output).toEqual(['12345', '6', '7890']);
    })
});

describe('splitString', () => {
    it('should smoke correctly with a', () => {
        const output = (
            splitString('a')
        );
        expect(output).toEqual(['', 'a', '']);
    })
});

describe('splitString', () => {
    it('should smoke correctly with ab', () => {
        const output = (
            splitString('ab')
        );
        expect(output).toEqual(['a', 'b', '']);
    })
});

describe('splitString', () => {
    it('should smoke correctly with empty', () => {
        const output = (
            splitString('')
        );
        expect(output).toEqual(['', '', '']);
    })
});
