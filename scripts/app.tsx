import * as React from 'react';
import * as ReactDom from 'react-dom';

interface MainContainerState {}
interface MainContainerProps {}

class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    render() {
        return <h1>Hello holaa</h1>;
    }
}
ReactDom.render(<MainContainer />, document.getElementById('content'));
