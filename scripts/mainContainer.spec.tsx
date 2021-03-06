import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { MainContainer } from './mainContainer';
import { Dropdown } from './components/dropdown';
import { PainterInfo } from './components/painterInfo';
import { Painter } from './models/painter';
import { Painters } from './store/painters';

describe('MainContainer', () => {
    let fakePromise: any;

    beforeEach(() => {
        fakePromise = {
            then: jasmine.createSpy('promiseSpy')
        };
        spyOn(Painters, 'load').and.returnValue(fakePromise);
    });

    it('should mount the component properly', () => {
        let component: any = TestUtils.renderIntoDocument(<MainContainer />);

        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    describe('when the component has been mounted', () => {
        describe('when the server response', () => {
            let renderedComponent: any,
                resolve = (fakePromise: any) => {
                    let callback = fakePromise.then.calls.mostRecent().args[0];

                    callback(new Painters([{
                        name: 'Michelangelo',
                        style: 'Renaissance',
                        examples: ['David', 'Sistine Chapel', 'The Last Judgement']
                    }, {
                        name: 'Raphael',
                        style: 'Renaissance',
                        examples: ['School at Athens', 'Lucretia', 'Saint George and the Dragon']
                    }]));
                };

            beforeEach(() => {
                renderedComponent = TestUtils.renderIntoDocument(<MainContainer />);

                resolve(fakePromise);
            });

            it('should print the data into the select', () => {
                let expected: Array<string> = TestUtils.findRenderedComponentWithType(renderedComponent, Dropdown).props.painters;

                expect(expected.length).toBe(2);
                expect(expected[0]).toBe('Michelangelo');
                expect(expected[1]).toBe('Raphael');
            });

            it('should show the first painters', () => {
                let expected: Painter = TestUtils.findRenderedComponentWithType(renderedComponent, PainterInfo).props.painter;

                expect(expected.name).toBe('Michelangelo');
                expect(expected.style).toBe('Renaissance');
                expect(expected.examples).toEqual(['David', 'Sistine Chapel', 'The Last Judgement']);
            });

            describe('when another painter is selected', () => {
                let changePainter = (name: string) => {
                    let callback: Function = TestUtils.findRenderedComponentWithType(renderedComponent, Dropdown).props.onChange;

                    callback(name);
                };
                it('should update the painter info', () => {
                    let expected: Painter;
                    
                    changePainter('Raphael');
                    
                    expected = TestUtils.findRenderedComponentWithType(renderedComponent, PainterInfo).props.painter;

                    expect(expected.name).toBe('Raphael');
                    expect(expected.style).toBe('Renaissance');
                    expect(expected.examples).toEqual(['School at Athens', 'Lucretia', 'Saint George and the Dragon']);
                });
            });
        });
    });
});