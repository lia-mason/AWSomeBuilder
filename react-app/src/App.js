import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import React, { Component } from 'react';
import axios from 'axios'

Amplify.configure(awsconfig);

class App extends Component {

    constructor () {
      super()
      this.state = {
        bookings: [],
        carInfo: {},
        showBookings: false,
        showConfirmation: false
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (action) {
      if (action === "getBookings") {
        if(!this.state.showBookings){
          axios.get("https://6wtr7uxy9l.execute-api.ca-central-1.amazonaws.com/GetBookings")
          .then(response => this.setState({bookings: response.data}))
          this.setState( {showBookings: true} )
          this.setState( {showConfirmation: false} )
        }
        else {
          this.setState( {showBookings: false} )
        }
      }
      if (action === "bookCar") {
        if(!this.state.showConfirmation) {
          axios.post("https://6wtr7uxy9l.execute-api.ca-central-1.amazonaws.com/BookCar")
          .then(response => this.setState({carInfo: response.data}))
          this.setState( {showBookings: false} )
          this.setState( {showConfirmation: true} )
        } 
        else {
          this.setState( {showConfirmation: false} )
        }
      }
    }

    render () {
      return (
        <div className="App">

            <AmplifySignOut />

            <div className="hero">
                <div className="hero-content">

                    <h1>Springfield Car Share</h1>

                    <div className="buttons">
                        <button onClick={() => this.handleClick("bookCar")}><p>Book a car near me</p></button>
                        <button onClick={() => this.handleClick("getBookings")}><p>See booking history</p></button>
                    </div>
                    
                    {this.state.showBookings &&
                      <div className="bookings-content">
                        <h3>Booking History</h3>
                        {this.state.bookings.map((data, key) =>
                          <div key={key}>
                            {data.username + ", "
                              + data.booking_id + ", "
                              + data.date_time + ", "
                              + data.license_plate}
                          </div>)}
                      </div>
                    }

                    {this.state.showConfirmation &&
                      <div className="bookings-content">
                        <h3>Booking Confirmed</h3>
                          {"Booking ID: " + this.state.carInfo.booking_id} <br/> 
                          {"License Plate: " + this.state.carInfo.license_plate} <br/>
                          {"Brand: " + this.state.carInfo.brand} <br/>
                          {"Location: " + this.state.carInfo.location} <br/>
                      </div>
                    }

                </div>

            </div>

        </div>
      )
    }
}

export default withAuthenticator(App);
