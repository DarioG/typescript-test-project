import * as React from 'react';
import { Dropdown } from './components/dropdown';
import { PainterInfo } from './components/painterInfo';
import { Painters } from './store/painters';

interface MainContainerProps { }
interface MainContainerState {
    painters: Painters;
    selected: string;
}

export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor() {
        super();

        this.state = {
            painters: null,
            selected: null
        };
    }

    private onPainterSelected(name: string) {
        let { painters } = this.state;

        this.setState({
            painters: painters,
            selected: name
        });
    }

    componentDidMount() {
        Painters.load().then((painters: Painters) => {
            this.setState({
                painters: painters,
                selected: painters.getNames()[0]
            })
        });
    }

    render() {
        let { painters, selected } = this.state;

        if (!painters) {
            return null;
        }

        return <div>
            <Dropdown painters={painters.getNames()} onChange={this.onPainterSelected.bind(this)}/>
            <PainterInfo painter={painters.get(selected)} />
        </div>;
    }
}