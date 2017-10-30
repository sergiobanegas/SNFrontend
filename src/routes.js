import React from 'react';
import { Route } from 'react-router-dom';
import { existsUserToken } from './services/storage';
import DashBoardContainer from './containers/Dashboard';
import SignInContainer from './containers/SignIn';
import SignUpContainer from './containers/SignUp';

export default () => {
 return (
   <div>
     <Route exact path="/" component={checkAuthorization(DashBoardContainer, true)} />
     <Route path="/login" component={checkAuthorization(SignInContainer, false)} />
     <Route path="/sign-up" component={checkAuthorization(SignUpContainer, false)} />
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
