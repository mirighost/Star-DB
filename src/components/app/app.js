import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/index'
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list/index'
import PersonDetails from '../person-details/index'
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapiService.getAllPlanets}
                                renderItem={(item) => item.name} />
                        </div>
                        <div className="col-md-6">
                            <PersonDetails
                                personId={this.state.selectedPerson} />
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapiService.getAllStarships}
                                renderItem={(item) => item.name} />
                        </div>
                        <div className="col-md-6">
                            <PersonDetails
                                personId={this.state.selectedPerson} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};