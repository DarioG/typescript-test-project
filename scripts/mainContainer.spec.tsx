import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { MainContainer } from './mainContainer';
import { ajax } from './utils/ajax';
import { Promise } from 'es6-promise';

describe('MainContainer', () => {
    let getJsonSpy: jasmine.Spy,
        promise: any;

    beforeEach(() => {
        promise = {
            then: jasmine.createSpy('promiseSpy')
        };
        getJsonSpy = spyOn(ajax, 'getJson').and.returnValue(promise);
    });

    it('should mount the component properly', () => {
        let component: any = TestUtils.renderIntoDocument(<MainContainer />);

        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    describe('when the component has been mounted', () => {
        it('should request the data', () => {
            TestUtils.renderIntoDocument(<MainContainer />);

            expect(ajax.getJson).toHaveBeenCalled();
        });

        describe('when the server response', () => {
            let resolve = (promise: any) => {
                let response = {
                        'famousPainters': [{
                            'name': 'Michelangelo',
                            'style:': 'Renaissance',
                            'examples: ': ['David', 'Sistine Chapel', 'The Last Judgement']
                        }, {
                            'name': 'Raphael',
                            'style:': 'Renaissance',
                            'examples: ': ['School at Athens', 'Lucretia', 'Saint George and the Dragon']
                        }]
                    },
                    callback = promise.then.calls.mostRecent().args[0];

                callback(response);
            };

            it('should print the data into the select', () => {
                let renderedComponent: any = TestUtils.renderIntoDocument(<MainContainer />),
                    expected: Array<any>;

                resolve(promise);

                expected = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'option');

                expect(expected.length).toBe(2);
                expect(expected[0].value).toBe('Michelangelo');
                expect(expected[0].text).toBe('Michelangelo');
                expect(expected[1].value).toBe('Raphael');
                expect(expected[1].text).toBe('Raphael');
            });
        });
    });
});