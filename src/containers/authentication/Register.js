import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import RegisterForm from '../../components/authentication/register/RegisterForm';
import {signup} from '../../actions/authentication/authentication';

class Register extends Component {
  _onSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(signup(values));
  }

   render () {
     const {error} = this.props;
     return (
       <div>
         Register
         <span>{error}</span>
         <RegisterForm
           onSubmit={this._onSubmit}
         />
         <Link to="/">
          <button>Go Home</button>
         </Link>
         {error && <p>Error registering</p>}
       </div>
     )
   }
}
const mapStateToProps = state => {
  return {
    error : state.authenticationReducer.error,
    logged: state.authenticationReducer.logged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Register));
