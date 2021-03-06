// framework imports
import React, { Component } from 'react';

// component imports
import SeatsList from './SeatsList';



class Seats extends Component {
	state = {

		// dropdown menu state
		value: 'carriage1',

		// 3 carriages each with 6 seats in each row and 10 in each column
		carriage1: [
			[
				{ id: 1, taken: true },
				{ id: 2, taken: true },
				{ id: 3, taken: false },
				{ id: 4, taken: true },
				{ id: 5, taken: true },
				{ id: 6, taken: false },
			],
			[
				{ id: 7, taken: false },
				{ id: 8, taken: true },
				{ id: 9, taken: true },
				{ id: 10, taken: false },
				{ id: 11, taken: false },
				{ id: 12, taken: false },
			],
			[
				{ id: 13, taken: false },
				{ id: 14, taken: false },
				{ id: 15, taken: false },
				{ id: 16, taken: true },
				{ id: 17, taken: false },
				{ id: 18, taken: false },
			],
			[
				{ id: 19, taken: false },
				{ id: 20, taken: false },
				{ id: 21, taken: false },
				{ id: 22, taken: false },
				{ id: 23, taken: false },
				{ id: 24, taken: false },
			],
			[
				{ id: 25, taken: false },
				{ id: 26, taken: true },
				{ id: 27, taken: true },
				{ id: 28, taken: false },
				{ id: 29, taken: false },
				{ id: 30, taken: false },
			],
			[
				{ id: 31, taken: false },
				{ id: 32, taken: false },
				{ id: 33, taken: false },
				{ id: 34, taken: false },
				{ id: 35, taken: true },
				{ id: 36, taken: false },
			],
			[
				{ id: 37, taken: false },
				{ id: 38, taken: false },
				{ id: 39, taken: true },
				{ id: 40, taken: false },
				{ id: 41, taken: false },
				{ id: 42, taken: true },
			],
			[
				{ id: 43, taken: false },
				{ id: 44, taken: true },
				{ id: 45, taken: true },
				{ id: 46, taken: true },
				{ id: 47, taken: false },
				{ id: 48, taken: false },
			],
			[
				{ id: 49, taken: false },
				{ id: 50, taken: true },
				{ id: 51, taken: false },
				{ id: 52, taken: false },
				{ id: 53, taken: false },
				{ id: 54, taken: true },
			],
			[
				{ id: 55, taken: false },
				{ id: 56, taken: true },
				{ id: 57, taken: true },
				{ id: 58, taken: false },
				{ id: 59, taken: false },
				{ id: 60, taken: false },
			],
		],
		carriage2: [
			[
				{ id: 1, taken: false },
				{ id: 2, taken: true },
				{ id: 3, taken: false },
				{ id: 4, taken: false },
				{ id: 5, taken: true },
				{ id: 6, taken: false },
			],
			[
				{ id: 7, taken: false },
				{ id: 8, taken: true },
				{ id: 9, taken: false },
				{ id: 10, taken: false },
				{ id: 11, taken: false },
				{ id: 12, taken: false },
			],
			[
				{ id: 13, taken: false },
				{ id: 14, taken: false },
				{ id: 15, taken: false },
				{ id: 16, taken: true },
				{ id: 17, taken: false },
				{ id: 18, taken: false },
			],
			[
				{ id: 19, taken: false },
				{ id: 20, taken: false },
				{ id: 21, taken: false },
				{ id: 22, taken: false },
				{ id: 23, taken: false },
				{ id: 24, taken: false },
			],
			[
				{ id: 25, taken: false },
				{ id: 26, taken: true },
				{ id: 27, taken: false },
				{ id: 28, taken: false },
				{ id: 29, taken: false },
				{ id: 30, taken: false },
			],
			[
				{ id: 31, taken: false },
				{ id: 32, taken: false },
				{ id: 33, taken: false },
				{ id: 34, taken: false },
				{ id: 35, taken: true },
				{ id: 36, taken: false },
			],
			[
				{ id: 37, taken: false },
				{ id: 38, taken: false },
				{ id: 39, taken: true },
				{ id: 40, taken: false },
				{ id: 41, taken: false },
				{ id: 42, taken: true },
			],
			[
				{ id: 43, taken: false },
				{ id: 44, taken: false },
				{ id: 45, taken: false },
				{ id: 46, taken: true },
				{ id: 47, taken: false },
				{ id: 48, taken: false },
			],
			[
				{ id: 49, taken: false },
				{ id: 50, taken: true },
				{ id: 51, taken: false },
				{ id: 52, taken: false },
				{ id: 53, taken: false },
				{ id: 54, taken: false },
			],
			[
				{ id: 55, taken: false },
				{ id: 56, taken: true },
				{ id: 57, taken: true },
				{ id: 58, taken: false },
				{ id: 59, taken: false },
				{ id: 60, taken: false },
			],
		],
		carriage3: [
			[
				{ id: 1, taken: false },
				{ id: 2, taken: false },
				{ id: 3, taken: false },
				{ id: 4, taken: true },
				{ id: 5, taken: false },
				{ id: 6, taken: false },
			],
			[
				{ id: 7, taken: false },
				{ id: 8, taken: false },
				{ id: 9, taken: false },
				{ id: 10, taken: false },
				{ id: 11, taken: false },
				{ id: 12, taken: false },
			],
			[
				{ id: 13, taken: false },
				{ id: 14, taken: false },
				{ id: 15, taken: false },
				{ id: 16, taken: false },
				{ id: 17, taken: false },
				{ id: 18, taken: false },
			],
			[
				{ id: 19, taken: false },
				{ id: 20, taken: false },
				{ id: 21, taken: false },
				{ id: 22, taken: false },
				{ id: 23, taken: false },
				{ id: 24, taken: false },
			],
			[
				{ id: 25, taken: false },
				{ id: 26, taken: false },
				{ id: 27, taken: false },
				{ id: 28, taken: false },
				{ id: 29, taken: false },
				{ id: 30, taken: false },
			],
			[
				{ id: 31, taken: false },
				{ id: 32, taken: false },
				{ id: 33, taken: false },
				{ id: 34, taken: false },
				{ id: 35, taken: true },
				{ id: 36, taken: false },
			],
			[
				{ id: 37, taken: false },
				{ id: 38, taken: false },
				{ id: 39, taken: true },
				{ id: 40, taken: false },
				{ id: 41, taken: false },
				{ id: 42, taken: false },
			],
			[
				{ id: 43, taken: false },
				{ id: 44, taken: false },
				{ id: 45, taken: false },
				{ id: 46, taken: false },
				{ id: 47, taken: false },
				{ id: 48, taken: false },
			],
			[
				{ id: 49, taken: false },
				{ id: 50, taken: false },
				{ id: 51, taken: false },
				{ id: 52, taken: false },
				{ id: 53, taken: false },
				{ id: 54, taken: false },
			],
			[
				{ id: 55, taken: false },
				{ id: 56, taken: false },
				{ id: 57, taken: false },
				{ id: 58, taken: false },
				{ id: 59, taken: false },
				{ id: 60, taken: false },
			],
		],

		// currently selected carriage to be displayed
		currentSelected: [
			[
				{ id: 1, taken: true },
				{ id: 2, taken: true },
				{ id: 3, taken: false },
				{ id: 4, taken: true },
				{ id: 5, taken: true },
				{ id: 6, taken: false },
			],
			[
				{ id: 7, taken: false },
				{ id: 8, taken: true },
				{ id: 9, taken: true },
				{ id: 10, taken: false },
				{ id: 11, taken: false },
				{ id: 12, taken: false },
			],
			[
				{ id: 13, taken: false },
				{ id: 14, taken: false },
				{ id: 15, taken: false },
				{ id: 16, taken: true },
				{ id: 17, taken: false },
				{ id: 18, taken: false },
			],
			[
				{ id: 19, taken: false },
				{ id: 20, taken: false },
				{ id: 21, taken: false },
				{ id: 22, taken: false },
				{ id: 23, taken: false },
				{ id: 24, taken: false },
			],
			[
				{ id: 25, taken: false },
				{ id: 26, taken: true },
				{ id: 27, taken: true },
				{ id: 28, taken: false },
				{ id: 29, taken: false },
				{ id: 30, taken: false },
			],
			[
				{ id: 31, taken: false },
				{ id: 32, taken: false },
				{ id: 33, taken: false },
				{ id: 34, taken: false },
				{ id: 35, taken: true },
				{ id: 36, taken: false },
			],
			[
				{ id: 37, taken: false },
				{ id: 38, taken: false },
				{ id: 39, taken: true },
				{ id: 40, taken: false },
				{ id: 41, taken: false },
				{ id: 42, taken: true },
			],
			[
				{ id: 43, taken: false },
				{ id: 44, taken: true },
				{ id: 45, taken: true },
				{ id: 46, taken: true },
				{ id: 47, taken: false },
				{ id: 48, taken: false },
			],
			[
				{ id: 49, taken: false },
				{ id: 50, taken: true },
				{ id: 51, taken: false },
				{ id: 52, taken: false },
				{ id: 53, taken: false },
				{ id: 54, taken: true },
			],
			[
				{ id: 55, taken: false },
				{ id: 56, taken: true },
				{ id: 57, taken: true },
				{ id: 58, taken: false },
				{ id: 59, taken: false },
				{ id: 60, taken: false },
			],
		],
		selectedSeats: [],
	};

	handleChange = (event) => {
		this.setState({
			value: event.target.value,
			currentSelected: this.returnCarriage(event),
		});
	};

	// returns selected carriage
	returnCarriage = (event) => {
		switch (event.target.value) {
			case 'carriage1':
				return this.state.carriage1;
			case 'carriage2':
				return this.state.carriage2;
			case 'carriage3':
				return this.state.carriage3;
			default:
				console.log('failed to find seats');
				return null;
		}
	};

	// displays in text how many seats left
	getSelectedSeatsOfMax() {
		const selectedSeatsNum = this.state.selectedSeats.length;
		const ticketsNum = this.props.tickets;

		if (ticketsNum === null) {
			return;
		}

		return (
			<p className="text-sm text-gray-900 font-medium">
				{'Antall seter ' + selectedSeatsNum + '/' + ticketsNum.length}
			</p>
		);
	}

	setSelectedSeats(selectedSeats) {
		this.setState({ selectedSeats });
	}

	render() {
		return (
			<div className={this.props.chooseSeat ? 'block' : 'hidden'}>
				<div className="px-5 pb-5 mx-auto">
					<div className="inline-block relative w-full">
						<select
							onChange={this.handleChange}
							value={this.state.value}
							className="block appearance-none w-full bg-white hover:border-gray-400 p-3 pr-8 rounded shadow leading-tight text-sm focus:outline-none focus:shadow-outline"
						>
							<option value="carriage1">Vogn 1</option>
							<option value="carriage2">Vogn 2</option>
							<option value="carriage3">Vogn 3</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
					<div style={{ paddingTop: '15px' }}>
						{this.getSelectedSeatsOfMax()}
					</div>
					<div className="mt-8">
						<SeatsList
							tickets={this.props.tickets}
							carriageValue={this.state.value}
							carriage={this.state.currentSelected}
							selectedSeats={this.state.selectedSeats}
							setSelectedSeats={(selectedSeats) =>
								this.setSelectedSeats(selectedSeats)
							}
						/>
					</div>
				</div>
				<div className="px-5 pt-5 pb-6 bg-gray-100 modal-footer">
					<button
						onClick={this.props.continueToPayment}
						className="p-3 w-full bg-vy-green-300 text-center text-sm font-medium text-white rounded-md hover:bg-vy-green-400"
					>
						Fortsett til betaling
					</button>
				</div>
			</div>
		);
	}
}

export default Seats;
