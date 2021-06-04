import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Movies from './component/screens/movies/Movie';
import Series from './component/screens/series/Series'
import UseRedcuerIncrrementDecrement from './useReducer/UseRedcuerIncrrementDecrement';

function Controller() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" render={() => <Movies />} />
                    <Route exact path="/use-reducer" render={() => <UseRedcuerIncrrementDecrement  />} />
                    <Route path="/series" render={() => <Series />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Controller