
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsFeed from './NewsFeed';

function Main() {   
    return (
        <Switch>
            <Route exact path="/">
                <NewsFeed />
            </Route>
            {/* <Route path="/kundvagn" component={Cart} />
            <Route path="/crud" component={CrudPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/produkt/:url" component={ProductDetail} /> */}
        </Switch>
    )    
}

export default Main;