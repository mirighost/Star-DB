import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page/index'
import ErrorBoundary from '../error-boundary/index'
// import Row from '../row/index'
import ItemDetails, { Record } from '../item-details/item-details';
import ItemList from '../item-list';

import SwapiService from '../../services/swapi-service'

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender:" />
                <Record field="eyeColor" label="Eye Color:" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} >

                <Record field="model" label="Model:" />
                <Record field="length" label="Length:" />
                <Record field="costInCredits" label="Cost:" />

            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />

                    {/* <PeoplePage />

                    <Row
                        left={personDetails}
                        right={starshipDetails} /> */}

                    <ItemList
                        getData={getAllPeople}
                        onItemSelected={() => { }}>

                        {({ name }) => <span>{name}</span>}
                    </ItemList>

                    <ItemList
                        getData={getAllPlanets}
                        onItemSelected={() => { }}>

                        {({ name }) => <span>{name}</span>}
                    </ItemList>

                </div>
            </ErrorBoundary>
        );
    };
};