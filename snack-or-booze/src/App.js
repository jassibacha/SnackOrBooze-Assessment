import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Item from './Item';

function App() {
    // State variables
    const [isLoading, setIsLoading] = useState(true);
    const [allItems, setAllItems] = useState([]);

    // Effect hook to retrieve all items from the API
    useEffect(() => {
        /**
         * Retrieves all items from the SnackOrBooze API and sets them in state.
         */
        async function getAllItems() {
            // Retrieve snacks from the API
            let snacks = await SnackOrBoozeApi.getSnacks();
            // Retrieve drinks from the API
            let drinks = await SnackOrBoozeApi.getDrinks();
            // Set all items in state
            setAllItems({ snacks, drinks });
            // Set isLoading to false
            setIsLoading(false);
        }

        getAllItems();
    }, []);

    // If still loading, render a loading message
    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    // Render the main component
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path="/">
                            {/* Render the Home component */}
                            <Home />
                        </Route>
                        <Route exact path="/snacks">
                            {/* Render the Menu component with snacks */}
                            <Menu
                                items={allItems.snacks}
                                type="snacks"
                                title="Snacks"
                            />
                        </Route>
                        <Route path="/snacks/:id">
                            {/* Render the Item component with snacks */}
                            <Item items={allItems.snacks} cantFind="/snacks" />
                        </Route>
                        <Route exact path="/drinks">
                            {/* Render the Menu component with drinks */}
                            <Menu
                                items={allItems.drinks}
                                type="drinks"
                                title="Drinks"
                            />
                        </Route>
                        <Route path="/drinks/:id">
                            {/* Render the Item component with drinks */}
                            <Item items={allItems.drinks} cantFind="/drinks" />
                        </Route>
                        <Route>
                            {/* If no route matches, render a message */}
                            <p>Hmmm. I can't seem to find what you want.</p>
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
