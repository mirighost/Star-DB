import React from 'react';
import { PlanetList } from '../sw-components/index';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({ history }) => {
    return (
        <PlanetList
            onItemSelected={(itemId) => {
                history.push(itemId);
            }}
        />
    );
};

export default withRouter(PlanetsPage);
