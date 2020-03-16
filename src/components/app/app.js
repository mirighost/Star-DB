import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary/index';
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context/index';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages/index';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/index';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './app.css'

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

                            {/* Item Pages */}
                            <Route path="/"
                                render={() => <h2>Welcome to StarDB</h2>}
                                exact />
                            <Route path="/people" exact component={PeoplePage} />
                            <Route path="/planets" exact component={PlanetsPage} />
                            <Route path="/starships" exact component={StarshipsPage} />

                            {/* Item Details */}
                            <Route path="/people/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <PersonDetails itemId={id} />
                                }} />

                            <Route path="/planets/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <PlanetDetails itemId={id} />
                                }} />

                            <Route path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />
                                }} />

                        </div>

                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};