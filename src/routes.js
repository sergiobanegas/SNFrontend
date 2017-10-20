import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App/App';
import Login from './containers/authentication/Login';
import Register from './containers/authentication/Register';

export default () => {
 return (
   <div>
       <Route exact path="/" component={checkAuthorization(App, true)} />
       <Route path="/login" component={checkAuthorization(Login, false)} />
       <Route path="/register" component={checkAuthorization(Register, false)} />
   </div>
 )
}

function checkAuthorization(WrappedComponent, authNeeded) {
  if (authNeeded) {
    return class extends React.Component {
      componentWillMount(){
        localStorage.getItem("user_token") == null && this.props.history.replace("/login");
      }
       render() {
           return <WrappedComponent {...this.props} />
       }
     }
  } else {
    return class extends React.Component {
      componentWillMount(){
        localStorage.getItem("user_token") != null && this.props.history.replace("/");

      }
       render() {
           return <WrappedComponent {...this.props} />
       }
     }
  }
}
