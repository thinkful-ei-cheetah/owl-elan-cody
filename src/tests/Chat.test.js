import React from 'react';
import ReactDOM from 'react-dom';
import Chat from '../components/Chat'
import chatEvents from '../chat-events'
import participants from '../participants';
import renderer from 'react-test-renderer';

describe('Stage Participants', () => {
    it('renders without crashing' , () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat chats={chatEvents} participants={participants} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Chat chats={chatEvents} participants={participants} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});