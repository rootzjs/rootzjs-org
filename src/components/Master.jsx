// IMPORT DEPENDECIES
import React from 'react';
import { CssBaseline } from '../Matlib';
import { AppTheme } from '../theme/App';
import { AppDrawer } from '../nodes/Drawer';
import { AppHeader } from '../nodes/Header';
import { OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// IMPORT MODULES 
import { NodeSection } from '../nodes/Modules/Documentation/Node';
import { StateSection } from '../nodes/Modules/Documentation/State';
import { ActionsSection } from '../nodes/Modules/Documentation/Actions';
import { ProfileSection } from '../nodes/Modules/Documentation/Profile';
import { ContractSection } from '../nodes/Modules/Documentation/Contract';
import { NodePropsSection } from '../nodes/Modules/Documentation/NodeProps';
import { ComponentsSection } from "../nodes/Modules/Documentation/Components";
import { IntroductionSection } from "../nodes/Modules/Documentation/Introduction";
import { InstallationSection } from "../nodes/Modules/Documentation/Installation";
import { AppStructureSection } from "../nodes/Modules/Documentation/AppStructure";
import { ThinkingRootzSection } from "../nodes/Modules/Documentation/ThinkingRootz";

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
                        <div id="masterPage" className={styl.playgroundMasterContainer}>
                              <Route
                                    exact
                                    path="/profile"
                                    component={() => <ProfileSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/contract"
                                    component={() => <ContractSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/actions"
                                    component={() => <ActionsSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/state"
                                    component={() => <StateSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/nodeprops"
                                    component={() => <NodePropsSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/node"
                                    component={() => <NodeSection theme={props.theme} />}
                              />
                              <Route
                                    exact
                                    path="/app-structure"
                                    component={() => <AppStructureSection theme={props.theme} />}
                              />
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
