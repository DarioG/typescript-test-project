import { Painter } from '../models/painter';

export class Painters {
    private painters: Array<Painter>;
    constructor(painters: Array<Painter>) {
        this.painters = painters;
    }

    public get(name: string): Painter {
        return this.painters.filter((painter: Painter) => {
            return painter.name === name;
        })[0];
    }

    public getNames(): Array<string> {
        return this.painters.map((value: Painter) => value.name);
    }
}