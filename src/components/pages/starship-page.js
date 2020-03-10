import React, { Component } from 'react';
import Row from '../row/index'
import { StarshipDetails, StarshipList, } from '../sw-components/index';

export default class StarshipPage extends Component {

    state = {
        selectedItem: 5
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />} />
        );
    };
};