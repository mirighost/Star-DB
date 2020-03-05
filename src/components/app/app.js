import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page/index'
import ErrorBoundary from '../error-boundary/index'
import Row from '../row/index'
import ItemDetails from '../item-details';

import SwapiService from '../../services/swapi-service'

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} />
        )

        return (
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />

                    {/* <PeoplePage /> */}


                    <Row
                        left={personDetails}
                        right={starshipDetails} />

                </div>
            </ErrorBoundary>
        );
    };
};