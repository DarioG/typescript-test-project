import * as React from 'react';
import { ajax } from './utils/ajax'
import { Dropdown } from './components/dropdown';

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

    render() {
        return <div>
            <Dropdown painters={this.state.painters} />
        </div>;
    }
}