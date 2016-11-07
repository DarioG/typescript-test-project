import { Painters } from './painters';

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
});