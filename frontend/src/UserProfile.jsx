// e8007e4db60528762be401e35489e959
// Add this as a X-TripGo-Key header to your API calls to authenticate.

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ChooseTicketBS from './bottomsheets/ChooseTicketBS';
import BuySingleTicketBS from './bottomsheets/BuySingleTicketBS';
import Navbar from './components/navbar';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            //I create fake user data for now
            user : {
                name: "Jonathan Swallow",    
            },
            chooseTicket: false,
            singleTicket: false,
            periodTicket: false
        }
    }

    newTicketButtonHandler = () => {
        const newTicketShow = this.state.chooseTicket;
        this.setState({chooseTicket: !newTicketShow});
    }

    buySingleTicketButtonHandler = () => {
        const buySingleTicketShow = this.state.singleTicket;
        this.setState({singleTicket: !buySingleTicketShow});
        this.newTicketButtonHandler();
    }

    renderChooseTicket = () => {
        if(this.state.chooseTicket) {
            return (
                <React.Fragment>
                    <div onClick={this.cancelTransaction} className="modalBack"></div>
                    <ChooseTicketBS click={this.buySingleTicketButtonHandler} clickX={this.newTicketButtonHandler} ></ChooseTicketBS>
                </React.Fragment>
            )
        }
    }

    renderBuySingleTicket = () => {
        if(this.state.singleTicket === true){
            return (
                <React.Fragment>
                    <div onClick={this.cancelTransaction} className="modalBack"></div>
                    <BuySingleTicketBS cancelTransaction = {this.cancelTransaction} hideBuySingleTicket={this.hideBuySingleTicket}></BuySingleTicketBS>
                </React.Fragment>
            )
        } 
    }

    hideBuySingleTicket = () => {
        this.setState({singleTicket: false});
        this.newTicketButtonHandler();
    }

    cancelTransaction = () => {
        this.setState({singleTicket: false});
    }

    render() {

    
        return (

            <div>
                {this.renderChooseTicket()}
                {this.renderBuySingleTicket()}
                <Navbar></Navbar>
                <div className="container">
                    <div className="welcome">
                        <div className="profileImage">Image</div>
                        <h2>Hei, {this.state.user.name}</h2>
                    </div>

                    <button className="styleNewTicketButton" onClick={this.newTicketButtonHandler}>Ny billett</button>

                    <div className="section">
                        <div className="header">
                            <h3>Billetter</h3>
                            <Link to={'/tickets'}>Se alle billetter</Link>
                        </div>

                        <div className="acticeTikcetContainer">Aktiv billett section</div>
                    </div>
                    <div className="section">
                        <div className="header">
                            <h3>Miljøkalkulator</h3>
                        </div>
                        <div className="acticeTikcetContainer">Miljø greier</div>
                    </div>

                
                    

                </div>
            </div>
        ); 
    }
}

export default UserProfile;