import * as React from "react";
import maskSymbols from "../maskSymbols";
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

configure({adapter: new Adapter()});
describe('maskSymbols', () => {
    it('should smoke correctly with 18+', () => {
        const output = shallow(
            maskSymbols('18+')
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
});
