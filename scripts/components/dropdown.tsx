import * as React from 'react';

interface DropdownProps {
    painters: Array<string>
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

    render() {
        return <select>{this.resolvePainters()}</select>;
    }
}