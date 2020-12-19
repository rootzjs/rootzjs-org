// IMPORT DEPENDECIES
import React from 'react';
import { CssBaseline } from '../Matlib';
import { AppTheme } from '../theme/App';
import { AppDrawer } from '../nodes/Drawer';
import { AppHeader } from '../nodes/Header';
import { ScrollHandler } from './ScrollHandler';
import { OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// IMPORT MODULES 
import { IntroductionSection } from "../nodes/Modules/Documentation/Introduction";
import { InstallationSection } from "../nodes/Modules/Documentation/Installation";

// IMPORT STYLES
import { Styles } from '../styles/Master';


const ComponentBody = props => {
      const styl = Styles();
      return (
            <Router>
                  <ScrollHandler>
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
                              <div id="masterPage" className={styl.playgroundMasterContainer}>
                                    <Route
                                          exact
                                          path="/Introduction"
                                          component={() => <IntroductionSection theme={props.theme} />}
                                    />
                                    <Route
                                          exact
                                          path="/Installation"
                                          component={() => <InstallationSection theme={props.theme} />}
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
                  </ScrollHandler>
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
