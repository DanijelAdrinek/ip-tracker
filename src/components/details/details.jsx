import React, { Component } from 'react';
import DataContainer from '../data-container/data-container';
import { IPInfoContext } from '../../contexts/ip-info';

import './details.scss';

class Details extends Component {

    render() {

        const { ipData } = this.context;

        return (
            <section className='details'>
                <DataContainer titleText="IP ADDRESS" resultText={ipData.ip} />
                <DataContainer titleText="LOCATION" resultText={ipData.location} />
                <DataContainer titleText="TIMEZONE" resultText={ipData.timezone} />
                <DataContainer titleText="ISP" resultText={ipData.isp} />
            </section>

        );
    }
}

Details.contextType = IPInfoContext;

export default Details;