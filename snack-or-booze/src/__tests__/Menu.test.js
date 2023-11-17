import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Menu from '../Menu';

const mockItems = [
    {
        id: 'nachos',
        name: 'Nachos',
        description: 'An American classic!',
        recipe: 'Cover expensive, organic tortilla chips with Cheez Whiz.',
        serve: 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives',
    },
    {
        id: 'hummus',
        name: 'Hummus',
        description: 'Sure to impress your vegan friends!',
        recipe: 'Purchase one container of hummus.',
        serve: 'Place unceremoniously on the table, along with pita bread.',
    },
    // ... other items ...
];

describe('Menu', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <Menu items={mockItems} type="snacks" />
            </MemoryRouter>
        );
    });
    // This throws some weird " Error: Not implemented: window.computedStyle(elt, pseudoElt)" error
    // it('renders links for each item', () => {
    //     const { getByRole } = render(
    //         <MemoryRouter>
    //             <Menu items={mockItems} type="snacks" />
    //         </MemoryRouter>
    //     );
    //     mockItems.forEach((item) => {
    //         const linkElement = getByRole('link', { name: item.name });
    //         expect(linkElement.getAttribute('href')).toBe(`/snacks/${item.id}`);
    //     });
    // });
});
