import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage'
import participants from './participants';
import renderer from 'react-test-renderer';

describe('Stage Participants', () => {
    it('renders without crashing' , () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage store={participants} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Stage store={participants} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});