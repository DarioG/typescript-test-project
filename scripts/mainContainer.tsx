import * as React from 'react';
import { ajax } from './utils/ajax'

interface MainContainerProps { }
interface MainContainerState {
    painters: Array<string>
}

export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor() {
        super();

        this.state = {
            painters: []
        };
    }
    componentDidMount() {
        let request = ajax.getJson();

        request.then((data: any) => {
            let painters = data.famousPainters.map((value: any) => value.name);

            this.setState({
                painters: painters
            })
        });
    }

    resolvePainters(): any {
        let { painters } = this.state,
            paintersElements: Array<any> = [];

        painters.forEach((value: string, key: number) => {
            paintersElements.push(
                <option
                    key={key}
                    value={value}>
                    {value}
                </option>
            )
        });

        return paintersElements;
    }

    render() {
        return <select>{this.resolvePainters()}</select>;
    }
}