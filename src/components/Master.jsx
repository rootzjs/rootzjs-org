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
import { ComponentsSection } from "../nodes/Modules/Documentation/Components";
import { IntroductionSection } from "../nodes/Modules/Documentation/Introduction";
import { InstallationSection } from "../nodes/Modules/Documentation/Installation";
import { ThinkingRootzSection } from "../nodes/Modules/Documentation/ThinkingRootz";

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
                                          path="/thinking-rootz"
                                          component={() => <ThinkingRootzSection theme={props.theme} />}
                                    />
                                    <Route
                                          exact
                                          path="/components"
                                          component={() => <ComponentsSection theme={props.theme} />}
                                    />
                                    <Route
                                          exact
                                          path="/introduction"
                                          component={() => <IntroductionSection theme={props.theme} />}
                                    />
                                    <Route
                                          exact
                                          path="/installation"
                                          component={() => <InstallationSection theme={props.theme} />}
                                    />
                                    <Route
                                          exact
                                          path="/"
                                          render={
                                                () => <Redirect to="/introduction" />
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
