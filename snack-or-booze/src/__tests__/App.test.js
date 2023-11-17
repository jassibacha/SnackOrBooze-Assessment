import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../App';

// Mock the axios module
//jest.mock('axios');

// jest.mock('axios', () => ({
//     get: jest.fn(() =>
//         Promise.resolve({
//             data: {
//                 snacks: [
//                     {
//                         id: 'nachos',
//                         name: 'Nachos',
//                         description: 'An American classic!',
//                         recipe: 'Cover expensive, organic tortilla chips with Cheez Whiz.',
//                         serve: 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives',
//                     },
//                 ], // Example snack data
//                 drinks: [
//                     {
//                         id: 'martini',
//                         name: 'Martini',
//                         description: 'An ice-cold, refreshing classic.',
//                         recipe: 'Mix 3 parts vodka & 1 part dry vermouth.',
//                         serve: 'Serve very cold, straight up.',
//                     },
//                 ], // Example drink data
//             },
//         })
//     ),
// }));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// it('renders the home page initially', async () => {
//     // Set up the mock response
//     // axios.get.mockResolvedValue({
//     //     data: {
//     //         snacks: [
//     //             {
//     //                 id: 'nachos',
//     //                 name: 'Nachos',
//     //                 description: 'An American classic!',
//     //                 recipe: 'Cover expensive, organic tortilla chips with Cheez Whiz.',
//     //                 serve: 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives',
//     //             },
//     //         ], // Example snack data
//     //         drinks: [
//     //             {
//     //                 id: 'martini',
//     //                 name: 'Martini',
//     //                 description: 'An ice-cold, refreshing classic.',
//     //                 recipe: 'Mix 3 parts vodka & 1 part dry vermouth.',
//     //                 serve: 'Serve very cold, straight up.',
//     //             },
//     //         ], // Example drink data
//     //     },
//     // });

//     const { getByText } = render(
//         <MemoryRouter>
//             <App />
//         </MemoryRouter>
//     );

//     // Check for initial loading text
//     expect(getByText(/Loading/i)).toBeInTheDocument();

//     // Wait for the content to be loaded and then check
//     await waitFor(() => {
//         expect(
//             getByText(/welcome to silicon valley's premier dive cafe!/i)
//         ).toBeInTheDocument();
//     });
// });
