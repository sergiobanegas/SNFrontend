import React from 'react';
import { Route } from 'react-router-dom';
import { existsUserToken } from './services/storage';
import DashBoardContainer from './containers/Dashboard';
import LoginContainer from './containers/Login';
import SignUpContainer from './containers/Register';

export default () => {
 return (
   <div>
     <Route exact path="/" component={checkAuthorization(DashBoardContainer, true)} />
     <Route path="/login" component={checkAuthorization(LoginContainer, false)} />
     <Route path="/register" component={checkAuthorization(SignUpContainer, false)} />
   </div>
   )
}

let checkAuthorization = (WrappedComponent, authNeeded) => {
  if (authNeeded) {
    return class extends React.Component {

      componentWillMount(){
        !existsUserToken() && this.props.history.replace("/login");
      }

      render() {
        return <WrappedComponent {...this.props} />
      }

   }
  } else {
    return class extends React.Component {

      render() {
        return <WrappedComponent {...this.props} />
      }

    }
  }
}
