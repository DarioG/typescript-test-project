import { Painters } from './painters';
import { ajax } from '../utils/ajax';
import { Promise } from 'es6-promise';

describe('Painters', () => {
    let painters: Painters;

    beforeEach(() => {
        painters = new Painters([{
            name: 'Michelangelo',
            style: 'Renaissance',
            examples: ['David', 'Sistine Chapel', 'The Last Judgement']
        }, {
            name: 'Raphael',
            style: 'Renaissance',
            examples: ['School at Athens', 'Lucretia', 'Saint George and the Dragon']
        }, {
            name: 'Michelangelo1',
            style: 'Renaissance',
            examples: ['David', 'Sistine Chapel', 'The Last Judgement']
        }]);
    });

    describe('getPainter()', () => {
        it('should return the proper painter info', () => {
            expect(painters.get('Michelangelo')).toEqual({
                name: 'Michelangelo',
                style: 'Renaissance',
                examples: ['David', 'Sistine Chapel', 'The Last Judgement']
            });

            expect(painters.get('Michelangelo1')).toEqual({
                name: 'Michelangelo1',
                style: 'Renaissance',
                examples: ['David', 'Sistine Chapel', 'The Last Judgement']
            });
        });
    });

    describe('getNames', () => {
        it('should return the painters names', () => {
            expect(painters.getNames()).toEqual(['Michelangelo', 'Raphael', 'Michelangelo1']);
        });
    });

    describe('load', () => {
        beforeEach(() => {
            spyOn(ajax, 'getJson').and.returnValue(new Promise((resolve) => {
                resolve({
                    'famousPainters': [{
                        name: 'Michelangelo',
                        style: 'Renaissance',
                        examples: ['David', 'Sistine Chapel', 'The Last Judgement']
                    }]
                });
            }));
        });

        describe('when the server response', () => {
            it('should return an instance of Painters with the data', (done) => {
                let promise = Painters.load();

                promise.then((painters: Painters) => {
                    expect(painters.get('Michelangelo')).toEqual({
                        name: 'Michelangelo',
                        style: 'Renaissance',
                        examples: ['David', 'Sistine Chapel', 'The Last Judgement']
                    });

                    done();
                });
            });
        });
    });
});