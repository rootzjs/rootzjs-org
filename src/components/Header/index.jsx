import React from 'react';
import {
      AppBar,
      Toolbar,
      useTheme,
      TabContext,
} from '../../Matlib';

// Import Components
import { ThemeToggler } from '../../nodes/Header/ThemeToggler';
import { MobileToolbar } from '../../nodes/Header/MobileToolbar';
import { DesktopToolbar } from '../../nodes/Header/DesktopToolbar';

import { Styles } from "../../styles/AppHeader";

export const Component = ({
      props,
      actions
}) => {
      const styl = Styles();
      const appTheme = useTheme();
      const isLight = props.theme === "light";

      return (
            <div className={styl.root}>
                  <TabContext value={props.history.location.pathname}>
                        <AppBar position="fixed" color="primary" className={styl.appBar}>
                              <Toolbar variant="dense">
                                    {
                                          appTheme.isMobile ?
                                                <MobileToolbar />
                                                :
                                                <DesktopToolbar isLight={isLight} />
                                    }
                                    <ThemeToggler
                                          isLight={isLight}
                                          onToggle={actions.ON_THEME_CHANGE}
                                    />
                              </Toolbar>
                        </AppBar>
                  </TabContext>
            </div>
      );
};