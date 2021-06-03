import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Movies from './component/screens/movies/Movie';
import Series from './component/screens/series/Series'

function Controller() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" render={() => <Movies />} />
                    <Route path="/series" render={() => <Series />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Controller