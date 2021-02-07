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
        expect(/18\+/.test(JSON.stringify(shallowToJson(output)))).toEqual(false);
    })

    it('should not be div contains 18+', () => {
        const output = shallow(
            maskSymbols('18+')
        );
        expect(/div/.test(JSON.stringify(shallowToJson(output)))).toEqual(false);
    })

    it('should have not 19+ in innerHTML', () => {
        const output = shallow(
            maskSymbols('19+')
        );
        expect(/19\+/.test(JSON.stringify(shallowToJson(output)))).toEqual(false);
    })

    it('should have not 20+ in innerHTML', () => {
        const output = shallow(
            maskSymbols('20+')
        );
        expect(/20\+/.test(JSON.stringify(shallowToJson(output)))).toEqual(false);
    })
});
