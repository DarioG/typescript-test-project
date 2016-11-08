import * as React from 'react';
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
        Painters.load().then((painters: Painters) => {
            this.setState({
                painters: painters
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