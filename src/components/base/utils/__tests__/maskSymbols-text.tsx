import * as React from "react";
import maskSymbols from "../maskSymbols";
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

configure({adapter: new Adapter()});
describe('Testing mask symbols', () => {
    it('should smoke correctly with 18+', () => {
        const output = shallow(
            maskSymbols('18+')
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })

    it('should have not 18+ in innerHTML', () => {
        const output = shallow(
            maskSymbols('18+')
        );
        expect(/18\+/.test(output.innerHTML)).toEqual(false);
    })

    it('should not be div contains 18+', () => {
        const output = shallow(
            maskSymbols('18+')
        );
        expect(output.tagName === 'div' && output.innerHTML === '18+').toEqual(false);
    })
});
