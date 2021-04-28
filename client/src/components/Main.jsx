
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsFeed from './NewsFeed';
import UserAdministration from './UserAdministration';

function Main() {   
    return (
        <Switch>
            <Route exact path="/">
                <NewsFeed />
            </Route>
            <Route path="/admin" component={UserAdministration} />
        </Switch>
    )    
}

export default Main;