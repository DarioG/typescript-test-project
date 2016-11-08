import { Painter } from '../models/painter';
import { ajax } from '../utils/ajax';
import { Promise } from 'es6-promise';

export class Painters {
    static load(): Promise<any> {
        let promise = ajax.getJson();

        return promise.then((data: any): Painters => {
            return new Painters(data.famousPainters)
        });
    }

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