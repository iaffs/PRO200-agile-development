import React, { Component } from 'react';
import boughtTickets from "../fakeData/boughtTicket";

class SendTicketBS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewTicketsShow: true,
            contactListShow: false,
            sentTicketsConfirmationShow: false,
            boughtTickets: boughtTickets,
            renderButtonText: "Send billetter"
        }
    }

    pickContact = (id) => {
        this.setState({
            reviewTicketsShow: false,
            contactListShow: true
        })
    }

    openContactList = () => {
        if (this.state.contactListShow) {
            return(
            <React.Fragment>
                <div>
                <p>Tilbake til billettoversikt</p>
                <button>Kontakter</button>
                <button>Grupper</button>
                <input placeholder="Søk"/>
                <div>Kontaktliste</div>
                </div>
            </React.Fragment>
            )
        }
    }

    reviewTicket = () => {
        if (this.state.reviewTicketsShow) {
            return(
                <React.Fragment>
                    <div>
                        {this.state.boughtTickets.map(item => {
                            return(
                            <div>
                                {item.ticket}
                                <div onClick={() => {this.pickContact(item.id)}}>
                                {item.activeTicket} 
                                {item.passiveTicket}
                                </div>
                                
                            </div>)
                            })}
                    </div>
                </React.Fragment>
            )
        }
        
    }
    

    render() {

        return(
            <div className="modalSendTickets">
                <p>Send billetter</p>
                <button>x</button>
                {this.reviewTicket()}
                {this.openContactList()}
                <button className="fortsettButton fortsettButtonDisabled">{this.state.renderButtonText}</button>
            </div>
        )
    }


}

export default SendTicketBS;