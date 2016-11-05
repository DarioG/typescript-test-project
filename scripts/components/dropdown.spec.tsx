import * as React from 'react';
import { Dropdown } from './dropdown';
import * as TestUtils from 'react-addons-test-utils';

describe('Dropdown', () => {
    it('should mount the dropdown', () => {
        let painters = ['Michelangelo', 'Raphael'],
            renderedComponent: any = TestUtils.renderIntoDocument(<Dropdown painters={painters} />),
            expected: Array<any> = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'option');

        expect(expected.length).toBe(2);
        expect(expected[0].value).toBe('Michelangelo');
        expect(expected[0].text).toBe('Michelangelo');
        expect(expected[1].value).toBe('Raphael');
        expect(expected[1].text).toBe('Raphael');
    });
});