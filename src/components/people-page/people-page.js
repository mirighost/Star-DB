import React, { Component } from 'react';
import ItemList from '../item-list/index';
import ItemDetails from '../item-details/index';
import SwapiService from '../../services/swapi-service';
import Row from '../row/index'
import ErrorBoundary from '../error-boundary/index'

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 2,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorBoundary />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );
        const personDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundary>
        );

        return (
            <Row
                left={itemList}
                right={personDetails} />
        );
    };
};