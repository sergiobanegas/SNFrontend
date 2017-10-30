import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterForm from '../../components/authentication/register/RegisterForm';
import { signUp } from '../../actions/authentication/authentication';

class SignUpContainer extends Component {

  onSubmit(values) {
    const { dispatch } = this.props;
    dispatch(signUp(values));
  }

   render () {
     const {error} = this.props;
     return (
       <div>
         <span>{error}</span>
         <RegisterForm
           onSubmit={this.onSubmit}
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
)(SignUpContainer));
