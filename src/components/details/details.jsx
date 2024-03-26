import React, { Component } from 'react';
import DataContainer from '../data-container/data-container';

import './details.scss';

class Details extends Component {

    render() {
        return (
            <section className='details'>
                <DataContainer titleText="IP ADDRESS" resultText="192.212.174.101" />
                <DataContainer titleText="LOCATION" resultText="Brooklyn, NY 10001" />
                <DataContainer titleText="TIMEZONE" resultText="UTC -05:00" />
                <DataContainer titleText="ISP" resultText="SpaceX Starlink" />
            </section>
        );
    }
}

export default Details;