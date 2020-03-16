import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary/index';
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context/index';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages/index';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};