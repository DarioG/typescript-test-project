import * as React from 'react';
import { ajax } from './utils/ajax'
import { Dropdown } from './components/dropdown';
import { PainterInfo } from './components/painterInfo';
import { Painters } from './store/painters';

interface MainContainerProps { }
interface MainContainerState {
    painters: Painters
}

export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor() {
        super();

        this.state = {
            painters: null
        };
    }

    componentDidMount() {
        let request = ajax.getJson();

        request.then((data: any) => {
            this.setState({
                painters: new Painters(data.famousPainters)
            })
        });
    }

    render() {
        let { painters } = this.state;

        if (!painters) {
            return null;
        }

        return <div>
            <Dropdown painters={painters.getNames()} />
            <PainterInfo painter={painters.get('Michelangelo')} />
        </div>;
    }
}