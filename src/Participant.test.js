import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import participants from './participants';
import renderer from 'react-test-renderer';

describe('Participant component', () => {
    it('renders without crashing' , () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participant store={participants} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Participant store={participants} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});