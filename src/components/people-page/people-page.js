import React, { Component } from 'react';
import ItemList from '../item-list/index';
import PersonDetails from '../person-details/index';
import ErrorIndicator from '../error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {

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

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    };
};