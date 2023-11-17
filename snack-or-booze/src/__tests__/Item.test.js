import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import Item from '../Item';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Preserve other router functionalities
    useParams: jest.fn(), // Mock useParams
}));

const items = [
    {
        id: 'nachos',
        name: 'Nachos',
        description: 'An American classic!',
        recipe: 'Cover expensive, organic tortilla chips with Cheez Whiz.',
        serve: 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives',
    },
];

describe('Item', () => {
    it('renders without crashing', () => {
        // Set the mock return value for useParams
        useParams.mockReturnValue({ id: 'nachos' });

        render(
            <MemoryRouter>
                <Item items={items} />
            </MemoryRouter>
        );
    });
});
