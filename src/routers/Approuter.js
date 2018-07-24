import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

import Movies from '../components/Movies';
import SingleMovie from '../components/SingleMovie';

const AppRouter = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Movies} />
                        <Route path="/movie/:id" component={SingleMovie} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default AppRouter;
