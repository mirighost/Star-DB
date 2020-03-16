import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary/index';
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context/index';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages/index';

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>

                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
            <Route path=''>
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} />

                        </div>

                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};