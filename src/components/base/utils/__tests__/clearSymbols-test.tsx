import * as React from "react";
import clearSymbols from "../clearSymbols";

describe('Testing clear symbols', () => {
    it('should smoke correctly with o', () => {
        const output = (
            clearSymbols('о')
        );
        expect(output).toEqual('o');
    })

    it('should smoke correctly with О', () => {
        const output = (
            clearSymbols('О')
        );
        expect(output).toEqual('O');
    })

    it('should smoke correctly with с', () => {
        const output = (
            clearSymbols('с')
        );
        expect(output).toEqual('c');
    })

    it('should smoke correctly with С', () => {
        const output = (
            clearSymbols('С')
        );
        expect(output).toEqual('C');
    })

    it('should smoke correctly with а', () => {
        const output = (
            clearSymbols('а')
        );
        expect(output).toEqual('a');
    })

    it('should smoke correctly with А', () => {
        const output = (
            clearSymbols('А')
        );
        expect(output).toEqual('A');
    })

    it('should smoke correctly with М', () => {
        const output = (
            clearSymbols('М')
        );
        expect(output).toEqual('M');
    })

    it('should smoke correctly with К', () => {
        const output = (
            clearSymbols('К')
        );
        expect(output).toEqual('K');
    })

    it('should smoke correctly with &laquo;', () => {
        const output = (
            clearSymbols('&laquo;')
        );
        expect(output).toEqual('\u00AB');
    })

    it('should smoke correctly with &raquo;', () => {
        const output = (
            clearSymbols('&raquo;')
        );
        expect(output).toEqual('\u00BB');
    })

    it('should smoke correctly with Москва и москва', () => {
        const output = (
            clearSymbols('Москва и москва')
        );
        expect(output).toEqual('Mocквa и мocквa');
    })

    it('should smoke correctly with Мпропрспркпрвпра', () => {
        const output = (
            clearSymbols('Мпропрспркпрвпра')
        );
        expect(output).toEqual('Mпрoпрcпркпрвпрa');
    })
});
