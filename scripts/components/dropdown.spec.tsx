import * as React from 'react';
import { Dropdown } from './dropdown';
import * as TestUtils from 'react-addons-test-utils';

describe('Dropdown', () => {
    let painters: Array<string>,
        myMock: jasmine.Spy,
        renderedComponent: any,
        options: Array<any>;

    beforeEach(() => {
        myMock = jasmine.createSpy('mock')
        renderedComponent = TestUtils.renderIntoDocument(<Dropdown painters={['Michelangelo', 'Raphael']} onChange={myMock}/>);

        options = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'option');
    });

    it('should mount the dropdown', () => {
        expect(options.length).toBe(2);
        expect(options[0].value).toBe('Michelangelo');
        expect(options[0].text).toBe('Michelangelo');
        expect(options[1].value).toBe('Raphael');
        expect(options[1].text).toBe('Raphael');
    });

    describe('when the option is changed', () => {
        it('should call the callback passed in with the selected value', () => {
            let selectEl = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'select')[0];

            TestUtils.Simulate.change(selectEl, {
                target: options[1]
            })

            expect(myMock).toHaveBeenCalledWith('Raphael');
        });
    });
});