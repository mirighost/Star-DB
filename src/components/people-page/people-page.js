import React, { Component } from 'react';
import ItemList from '../item-list/index';
import PersonDetails from '../person-details/index';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row/index'

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 2,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({ name, gender, birthYear }) => (
                    `${name} (${gender}, ${birthYear})`)} />
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <Row
                left={itemList}
                right={personDetails} />
        );
    };
};