import * as React from 'react';
import { ajax } from './utils/ajax'
import { Dropdown } from './components/dropdown';

interface MainContainerProps { }
interface MainContainerState {
    paintersNames: Array<string>
}

export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor() {
        super();

        this.state = {
            paintersNames: []
        };
    }

    componentDidMount() {
        let request = ajax.getJson();

        request.then((data: any) => {
            let paintersNames = data.famousPainters.map((value: any) => value.name);

            this.setState({
                paintersNames: paintersNames
            })
        });
    }

    render() {
        return <div>
            <Dropdown painters={this.state.paintersNames} />
        </div>;
    }
}