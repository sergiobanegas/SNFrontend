import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpComponent from '../../components/SignUp';
import { signUp } from '../../actions/authentication';

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { dispatch } = this.props;
    dispatch(signUp(values));
  }

   render () {
     const {error} = this.props;
     return (
       <div>
         <span>{error}</span>
         <SignUpComponent
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
