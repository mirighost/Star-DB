import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper/index';

const PersonDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >

            <Record field="gender" label="Gender:" />
            <Record field="eyeColor" label="Eye Color:" />
            <Record field="birthYear" label="Birth Year:" />
        </ItemDetails>
    );
};

export default withSwapiService(PersonDetails);