<<<<<<< HEAD
import React from 'react';
import EventPostIt from '../components/Layout/EventPostIt';
import ModalPage from '../components/Events/EventModal';
// import AddEvent from './components/??';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import {navbar} from '../components/Navigation/Navigation'
=======
import React from "react";
import EventPostIt from "../components/PostIt_Event/EventPostIt";
import ModalPage from "../components/Events/EventModal";
import API from "../utils/API";
import { Link } from "react-router-dom";
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9

class Events extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    API.findAll("events")
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="event-board">
        <h1>Upcoming Events</h1>
<<<<<<< HEAD
        {/* <Link to='/posts' style={{ float: 'right', marginLeft: '15px' }}>
          <p>Posts</p>{' '}
        </Link>
        <Link to='/' style={{ float: 'right' }}>
          <p>Home</p>{' '}
        </Link> */}
=======
        <Link to="/posts" style={{ float: "right", marginLeft: "15px" }}>
          <p>Posts</p>{" "}
        </Link>
        <Link to="/" style={{ float: "right" }}>
          <p>Home</p>{" "}
        </Link>
>>>>>>> 0ccf516a772c64400cb65100d6838ce205a2dfe9

        {/*passing getEvents to the add button so it can refresh*/}
        <ModalPage ModalPage={this.props.AddEvent} />

        {!this.state.results.length ? (
          <h1>No Events to Display</h1>
        ) : (
          this.state.results.map(event => {
            return (
              <EventPostIt
                key={event._id}
                event_url={event.event_url}
                event_title={event.event_title}
                event_details={event.event_details}
                event_place={event.event_place}
                html_url={event.html_url}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Events;
