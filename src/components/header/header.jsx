import React, { Component } from 'react';
import { ReactComponent as IconArrow } from '../../assets/images/real-icon-arrow.svg';
import { IPDataManager } from '../../assets/js/ip-data-manager';
import { IPInfoContext } from '../../contexts/ip-info';

import "./header.scss";
import Details from '../details/details';

class Header extends Component {
    constructor() {
        super();
        const api_key = process.env.REACT_APP_GEO_IPIFY_API_KEY;

        this.ipDataManager = new IPDataManager(api_key);
    }

    static contextType = IPInfoContext;

    /**
     * updates IP data that can 
     * 
     * @param {Object} newIpData - The IP data we will use to replace the old IP data
     */
    _updateIpData(newIpData) {
        const { updateIpData } = this.context;
        updateIpData(newIpData);
    }

    /**
     * Handles submit of the form, then takes the new IP address and returns data, if the data recieved is valid, updates data
     * 
     * @param {Object} event
     */
    handleSubmit = async event => {
        event.preventDefault();
        const inputElement = event.target.querySelector('#ip-input');
    
        try {
            const newData = await this.ipDataManager.fetchInfo(inputElement);
            if (newData) {
                this._updateIpData(newData);
            } else {
                console.log("Failed to fetch IP information.");
            }
        } catch (error) {
            console.error("Error fetching IP information:", error);
        }
    
        inputElement.value = '';
    }

    render() {
        return (
            <header className='header'>
                <div className="content-container">
                    <h1 className='title'>IP Address Tracker</h1>

                    <form onSubmit={this.handleSubmit} id='ip-form'>
                        <div className="form-group">
                            <input type="text" id='ip-input' placeholder='Search for any IP address or domain'/>
                            <button className='submit-btn' aria-label="Submit Button">
                                <IconArrow/>
                            </button>
                        </div>
                    </form>
                
                    <Details/>
                </div>
            </header>
        );
    }
}

export default Header;


  