import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { PainterInfo } from './painterInfo';
import { Painter } from '../models/painter';

describe('PainterInfo', () => {
    let component: any,
        getHTMLFrom = (element: string, index: number): string => {
            return TestUtils.scryRenderedDOMComponentsWithTag(component, element)[index].innerHTML
        };

    beforeEach(() => {
        let painter:Painter = {
            name: 'Michelangelo',
            style: 'Renaissance',
            examples: ['David', 'Sistine Chapel', 'The Last Judgement']
        };

        component = TestUtils.renderIntoDocument(
            <PainterInfo
                painter={painter}
            />
        );
    });

    it('should mount the component properly', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should print the painter info', () => {
        expect(getHTMLFrom('h1', 0)).toBe('Michelangelo');
        expect(getHTMLFrom('div', 1)).toBe('<span>Style: </span><span>Renaissance</span>');
        expect(getHTMLFrom('ul', 0)).toBe('<li>David</li><li>Sistine Chapel</li><li>The Last Judgement</li>');
    });
});