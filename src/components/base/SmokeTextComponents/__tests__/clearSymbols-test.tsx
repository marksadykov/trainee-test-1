import * as React from "react";
import clearSymbols from "../clearSymbols";

describe('clearSymbols', () => {
    it('should smoke correctly with o', () => {
        const output = (
            clearSymbols('о')
        );
        expect(output).toEqual('o');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with О', () => {
        const output = (
            clearSymbols('О')
        );
        expect(output).toEqual('O');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with с', () => {
        const output = (
            clearSymbols('с')
        );
        expect(output).toEqual('c');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with С', () => {
        const output = (
            clearSymbols('С')
        );
        expect(output).toEqual('C');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with а', () => {
        const output = (
            clearSymbols('а')
        );
        expect(output).toEqual('a');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with А', () => {
        const output = (
            clearSymbols('А')
        );
        expect(output).toEqual('A');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with М', () => {
        const output = (
            clearSymbols('М')
        );
        expect(output).toEqual('M');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with К', () => {
        const output = (
            clearSymbols('К')
        );
        expect(output).toEqual('K');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with &laquo;', () => {
        const output = (
            clearSymbols('&laquo;')
        );
        expect(output).toEqual('\u00AB');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with &raquo;', () => {
        const output = (
            clearSymbols('&raquo;')
        );
        expect(output).toEqual('\u00BB');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with Москва и москва', () => {
        const output = (
            clearSymbols('Москва и москва')
        );
        expect(output).toEqual('Mocквa и мocквa');
    })
});

describe('clearSymbols', () => {
    it('should smoke correctly with Мпропрспркпрвпра', () => {
        const output = (
            clearSymbols('Мпропрспркпрвпра')
        );
        expect(output).toEqual('Mпрoпрcпркпрвпрa');
    })
});
