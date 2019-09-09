import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './Landing.css';

class Landing extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ''
  };

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: '' });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message =
              'Sorry, that email/password combination is not valid. Please try again.';
            break;
          case 500:
            message = 'Server error. Please try again later.';
            break;
          default:
            message = 'Unknown error.';
        }

        this.setState({ error: message });
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div id="board"
        className='Form' 
      >
        <div className='mask rgba-gradient align-items-center' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 white-text text-center text-md-left'>
              <Link to='/events'>
                <h1
                  id='getposted'
                  style={{ marginTop: '10vh' }}
                  className='h1-responsive font-weight-bold wow fadeInLeft'
                  data-wow-delay='0.3s'
                >
                  #GetPosted
                </h1>{' '}
              </Link>
              <hr className='hr-light wow fadeInLeft' data-wow-delay='0.3s' />
              <h6 className='mb-3 wow fadeInLeft' data-wow-delay='0.3s'>
                Already have an account?
              </h6>
              <LoginForm onSubmit={this.handleSubmit} />
              {/* <Link
                to='/'
                id='login'
                variant='outline-warning'
                style={{ color: 'black' }}
                className='btn btn-outline-white wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                Login
              </Link> */}
            </div>

            {this.state.error && (
              <div className='row'>
                <div className='col'>
                  <div className='alert alert-danger mb-3' role='alert'>
                    {this.state.error}
                  </div>
                </div>
              </div>
            )}

            <div id='regform' className='col-md-6'>

                <RegistrationForm />
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
