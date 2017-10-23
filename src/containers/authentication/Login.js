  import React, { Component } from 'react';
  import {withRouter} from 'react-router-dom';
  import {connect} from 'react-redux';
  import LoginForm from '../../components/authentication/login/LoginForm';
  import {login} from '../../actions/authentication/authentication';

  class Login extends Component {
    _onSubmit = (values) => {
      const { dispatch } = this.props;
      dispatch(login(values.email, values.password));
    }

     render () {
       const {error} = this.props;
       return (
         <div>
           <LoginForm onSubmit={this._onSubmit} error={error}/>
           {error && <p>{error}</p>}
         </div>
       )
     }
  }
  
  const mapStateToProps = state => {
    return {
      error : state.authenticationReducer.error
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
  )(Login));
