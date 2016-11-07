import * as React from 'react';
import { Painter } from '../models/painter';

interface PainterInfoProps {
    painter: Painter;
};

interface PainterInfoState {};

export class PainterInfo extends React.Component<PainterInfoProps, PainterInfoState> {
    resolveExamples(examples: Array<string>): Array<JSX.Element> {
        return examples.map((example) => {
            return <li>{example}</li>;
        });
    }

    render() {
        let { name, style, examples } = this.props.painter;

        return <div>
            <h1>{this.props.painter.name}</h1>
            <div>
                <span>Style: </span>
                <span>{style}</span>
            </div>
            <ul>
                {this.resolveExamples(examples)}
            </ul>
        </div>;
    }
}