import React, { Component } from 'react';
import { ReactComponent as IconArrow } from '../../assets/images/real-icon-arrow.svg';

import "./header.scss";
import Details from '../details/details';

class Header extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const ipAddress = event.target.querySelector('#ip-input').value;
        console.log(ipAddress);
    }
    

    render() {
        return (
            <header className='header'>
                <div className="content-container">
                    <h1 className='title'>IP Address Tracker</h1>

                    <form onSubmit={this.handleSubmit} id='ip-form'>
                        <div className="form-group">
                            <input type="text" id='ip-input'/>
                            <button className='submit-btn'>
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


  