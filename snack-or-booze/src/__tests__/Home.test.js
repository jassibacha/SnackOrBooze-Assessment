import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Home from '../Home';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});
