import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from "./context/auth";
import { Redirect } from "react-router-dom"

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();

    return (
        <Route
          {...rest}
          render={props =>
            authTokens ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
}

export default PrivateRoute;