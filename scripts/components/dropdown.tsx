import * as React from 'react';

interface DropdownProps {
    painters: Array<string>;
    onChange: Function;
}
interface DropdownState {}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
    resolvePainters(): any {
        let { painters } = this.props;

        return painters.map((value: string, key: number) => {
            return <option
                key={key}
                value={value}>
                {value}
            </option>;
        });
    }

    onChange(event: any) {
        this.props.onChange(event.target.value);
    }

    render() {
        return <select onChange={this.onChange.bind(this)}>{this.resolvePainters()}</select>;
    }
}