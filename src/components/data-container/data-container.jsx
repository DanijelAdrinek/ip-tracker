import React, { Component } from 'react';

import './data-container.scss';

/**
 * Returns data container that contains a title of the data presented, and the value of the data we gave it
 * 
 * @param {string} titleText - Text of the title used in the DataContainer
 * @param {string} resultText - Text of the response we got from API that we want to use here 
 * 
 * @returns {HTMLElement}
 */
class DataContainer extends Component {

    render() {

        const {titleText, resultText} = this.props

        return (
            <div className="data-container">
                <strong className="data-container-title">{titleText}</strong>
                <div className="data-container-result">{resultText}</div>
            </div>
        );
    }
}

export default DataContainer;