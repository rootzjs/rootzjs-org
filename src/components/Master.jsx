// IMPORT DEPENDECIES
import React from 'react';
import { CssBaseline } from '../Matlib';
import { AppTheme } from '../theme/App';
import { AppDrawer } from '../nodes/Drawer';
import { AppHeader } from '../nodes/Header';
import { OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// IMPORT MODULES 
import { IntroductionSection } from "../nodes/Modules/Documentation/Introduction";

// IMPORT STYLES
import { Styles } from '../styles/Master';


const ComponentBody = props => {
      const styl = Styles();
      return (
            <Router>
                  <div className={styl.root} >
                        <CssBaseline />
                        <AppHeader
                              noIcons={false}
                              theme={props.theme}
                              config={props.config}
                        />
                        <AppDrawer
                              theme={props.theme}
                        />
                        <div className={styl.playgroundMasterContainer}>
                              <Route
                                    exact
                                    path="/Introduction"
                                    component={() => <IntroductionSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/"
                                    render={
                                          () => <Redirect to="/Introduction" />
                                    }
                              />
                        </div>
                        {
                              !props.didSomethingWentWrong ?
                                    <React.Fragment></React.Fragment>
                                    :
                                    <OopsSomethingWentWrong
                                          details={props.errorDetails}
                                          onReload={() => {
                                                window.location.reload(true)
                                          }}
                                    />
                        }
                  </div>
            </Router>
      );
}

export const Component = ({
      props,
      state,
      actions
}) => {

      // React.useEffect(() => {
      //       windowErrorHandler(actions.ON_ERROR_OCCURED);
      // }, [actions.ON_ERROR_OCCURED]);

      return (
            <AppTheme theme={state.theme} forComponent="APP">
                  <ComponentBody {...props} {...state} />
            </AppTheme>
      )
};
