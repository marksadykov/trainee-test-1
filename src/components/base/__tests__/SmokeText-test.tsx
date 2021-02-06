import * as React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import SmokeText from '../SmokeText';

configure({adapter: new Adapter()});
describe('SmokeText', () => {
    it('should smoke correctly with Москва', () => {
        const output = shallow(
            <SmokeText>Москва</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('Mocквa');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with long text', () => {
        const output = shallow(
            <SmokeText>10 мин. от м. Сходненская. Развитая инфраструктура. Индивидуальные скидки. Звоните!</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('10 мин. oт м. Cхoдненcкaя. Рaзвитaя инфрacтруктурa. Индивидуaльные cкидки. Звoните!');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with custom symbols', () => {
        const output = shallow(
            <SmokeText>ЖК &laquo;Счастье на Сходненской&raquo;</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('ЖK «Cчacтье нa Cхoдненcкoй»');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with custom symbols', () => {
        const output = shallow(
            <SmokeText>Сумасшедшие условия в РОЛЬФ! Выгода 250 000₽! Eclipse Cross за 1 249 000₽! Кредит 0%</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('Cумacшедшие уcлoвия в РOЛЬФ! Выгoдa 250 000₽! Eclipse Cross зa 1 249 000₽! Kредит 0%');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with custom symbols', () => {
        const output = shallow(
            <SmokeText>Сумасшедшие условия в РОЛЬФ! Выгода 250 000₽! Eclipse Cross за 1 249 000₽! Кредит 0%</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('Cумacшедшие уcлoвия в РOЛЬФ! Выгoдa 250 000₽! Eclipse Cross зa 1 249 000₽! Kредит 0%');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with clear string', () => {
        const output = shallow(
            <SmokeText>mitsubishi-rolf-msk.ru</SmokeText>
        );
        expect(shallowToJson(output)).toEqual('mitsubishi-rolf-msk.ru');
    })
});

describe('SmokeText', () => {
    it('should smoke correctly with 18+', () => {
        const output = shallow(
            <SmokeText>18+</SmokeText>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
});
