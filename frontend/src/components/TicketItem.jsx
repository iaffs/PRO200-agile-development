import React, { Component } from 'react';

class TicketItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dataLoaded: false,
			ticketExpanded: false,
			tickets: [],
		}
	}

	getTickets = async(id) => {
		if(!this.state.dataLoaded) {
			try {
				const response = await fetch(`https://localhost:5001/orders/${id}/basictickets`)
				const payload = await response.json()

				this.setState({
					tickets: payload,
					dataLoaded: true
				})
			} catch(error) {
				console.log(error)
			}
		}
	}

	expandTicket() {
		let expandedTicket = this.state.ticketExpanded
		this.setState({ ticketExpanded: !expandedTicket })
	}

	getTripParticipants = (id) => {
		let contacts = this.props.contactList.find((contact) => contact.id === id)
		// TODO return contact image
	}

	renderTicket() {
		// this.getTicket(this.props.id)
		
		return (
			<div>
				<div onClick={() => {this.getTickets(this.props.id); this.expandTicket()}}>
					<div className="px-2 py-2">
						<div className="flex items-center">
							<div style={this.state.ticketExpanded ? { height: 414 + 'px'}  : { height: 96 + 'px' }} className={this.props.active ? "bg-green-400 rounded-full h-64 w-2" : "bg-red-400 rounded-full h-24 w-2"}>
								{/* Empty div to create left border */}
							</div>
							<div className={this.state.ticketExpanded ? "hidden" : "block ml-4 w-full pr-2"}>
								<div className="flex justify-between items-center">
									<p className="font-medium text-base text-gray-900">{this.props.title}</p>
									<p className="font-medium text-sm text-gray-900">kr {this.props.price}</p>
								</div>
								<div className="mt-2 flex justify-between items-center">
									<p className="text-gray-700 text-sm">Fra <span className="font-medium text-sm text-gray-900">{this.props.from}</span> til <span className="font-medium text-sm text-gray-900">{this.props.to}</span></p>
									<div className="flex">
										{/* Colors to be replaces with images  */}
										<div className="h-8 w-8 border-2 border-white bg-red-200 rounded-full"></div>
										<div className="h-8 w-8 border-2 border-white bg-red-300 rounded-full -ml-2"></div>
										<div className="h-8 w-8 border-2 border-white bg-red-400 rounded-full -ml-2"></div>
										<div className="h-8 w-8 border-2 border-white bg-red-500 rounded-full -ml-2"></div>
									</div>
								</div>
							</div>
							<div className={this.state.ticketExpanded ? "block ml-4 w-full pr-2" : "hidden"}>
								<div className="flex justify-between items-start border-b border-gray-300 pb-5 pt-5">
									<div>
										<p className="font-medium text-base text-gray-900">{this.props.title}</p>
										<div className="flex mt-1">
											{/* Colors to be replaces with images  */}
											<div className="h-8 w-8 border-2 border-white bg-red-200 rounded-full"></div>
											<div className="h-8 w-8 border-2 border-white bg-red-300 rounded-full -ml-2"></div>
											<div className="h-8 w-8 border-2 border-white bg-red-400 rounded-full -ml-2"></div>
											<div className="h-8 w-8 border-2 border-white bg-red-500 rounded-full -ml-2"></div>
										</div>
									</div>
									<button className="bg-white text-gray-900 text-sm font-medium rounded-lg px-4 py-3 hover:bg-gray-100 border border-gray-300">Rediger</button>
								</div>
								<div className="flex items-center justify-between pt-6 pb-5 border-b border-gray-300">
									<div>
										<p className="text-gray-800 text-base font-medium">Oslo S</p>
										<p className="mt-2 text-gray-800 text-xl font-bold">21:44</p>
										<p className="mt-2 text-gray-700 text-sm">Spor 11</p>
									</div>
									<div className="text-center">
										<p className="text-gray-700 text-sm">2 timer</p>
										<span className="mt-5 block px-2 py-2 border border-vy-green-300 rounded-md text-vy-green-300">R30x</span>
									</div>
									<div>
										<p className="text-gray-800 text-base font-medium">Gjøvik</p>
										<p className="mt-2 text-gray-800 text-xl font-bold">23:34</p>
										<p className="mt-2 text-gray-700 text-sm">6 stopp</p>
									</div>
								</div>
								<div className="pt-6 pb-6">
									<div className="flex items-center justify-between">
										<p className="text-gray-900 text-sm">1x Voksen</p>
										<p className="text-gray-900 text-sm">kr 109,00</p>
									</div>
									<div className="mt-3 flex items-center justify-between">
										<p className="text-gray-900 text-sm">1x Voksen</p>
										<p className="text-gray-900 text-sm">kr 109,00</p>
									</div>
									<div className="mt-5 flex items-center justify-between">
										<p className="text-gray-900 text-sm font-medium">Total <span className="text-gray-600 font-normal">(inkl MVA)</span></p>
										<p className="text-gray-900 text-sm font-medium">kr 227,00</p>
									</div>
									<div className="mt-3 flex items-center justify-between">
										<p className="text-gray-900 text-sm">Herav MVA</p>
										<p className="text-gray-900 text-sm">kr 168,00</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
			return (
				<div>
					{this.renderTicket()}
				</div>
			)
		}
}

export default TicketItem