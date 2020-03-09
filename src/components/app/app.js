import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary/index';
// import Row from '../row/index'
import { SwapiServiceProvider } from '../swapi-service-context/index';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components/index'

import SwapiService from '../../services/swapi-service'

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={9} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};