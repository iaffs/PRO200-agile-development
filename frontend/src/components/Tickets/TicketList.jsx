// framework imports
import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import TicketItem from './TicketItem';


// component that displays a list of tickets, as well as a header and optional link
function TicketList(props) {
  
    const renderHeader =() => {
        // if the list header is defined with the to prop, it will render a link to the left
        if(props.to != null) {
            return (
                <div className="flex items-center justify-between">
                    <h1 className="text-lg text-gray-900">{props.title}</h1>
                    <Link to={props.to}>
                        <div className="text-sm text-gray-900 flex items-center">
                            {props.linkLabel}
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="h-5 w-5 text-gray-600"
                            >
                                <path
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            )
        // if not, it will only render the title
        } else {
            return (
                <h1 className="text-lg text-gray-900">{props.title}</h1>
            )
        }
    }

    return (
        <div>   
            <div className="px-5 py-6">
                <div className="mb-5">{renderHeader()}</div>
                <div className="bg-white shadow rounded-md">
                    <div className="divide-y divide-gray-300">
                        {
                            props.tickets ? props.tickets.map((item)  => {
                                return (
                                    <TicketItem
                                        key={item.id} 
                                        id={item.id}
                                        title={item.orderName}
                                        from={item.from}
                                        to={item.to}
                                        price={item.price}
                                        tickets={item.tickets}
                                        active={item.isActive}
                                        changeOrderName={props.changeOrderName}
                                    />
                                )
                            }) 
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketList