import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Tickets from './Tickets';
import UserDetails from './UserDetails';
import UserProfile from './UserProfile';
import Navbar from './components/navbar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coverSite: false
		};
	}

	notFound = () => {
		return <h1>not found</h1>;
	};

	startTransaction = () => { //this function make the faded background appear behind modals
		this.setState({coverSite: true});
	}

	cancelTransaction = () => { //this function make the faded background disappear 
		this.setState({coverSite: false});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<div className={ this.state.coverSite ? "modalBack" : null }></div>
					<Navbar></Navbar>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <UserProfile {...props}
												startTransaction={this.startTransaction}
												cancelTransaction={this.cancelTransaction}
							></UserProfile>}
						></Route>
						<Route
							exact
							path="/userdetails"
							render={(props) => <UserDetails {...props}></UserDetails>}
						></Route>
						<Route
							exact
							path="/tickets"
							render={(props) => <Tickets {...props}></Tickets>}
						></Route>
						<Route component={this.notFound}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
ReactDOM.render(<App></App>, document.getElementById('root'));
