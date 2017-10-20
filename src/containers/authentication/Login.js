  import React, { Component } from 'react';
  import {Link, withRouter} from 'react-router-dom';
  import {connect} from 'react-redux';
  import LoginForm from '../../components/authentication/login/LoginForm';
  import {login} from '../../actions/authentication/authentication';
  import { push } from 'react-router-redux';


  class Login extends Component {
    _onSubmit = (values) => {
      const { dispatch } = this.props;
      dispatch(login(values.email, values.password));
    }

    _onRegister = () => {
      const { dispatch } = this.props;
      dispatch(push("/register"));
    }

     render () {
       const {error} = this.props;
       return (
         <div>
           Login
           <span>{error}</span>
           <LoginForm
             onSubmit={this._onSubmit}
             onRegister={this._onRegister}
             />
           <Link to="/">
            <button>Go Home</button>
           </Link>
           {error && <p>Error logging in</p>}
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
