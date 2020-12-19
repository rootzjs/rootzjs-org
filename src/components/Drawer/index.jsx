import React from 'react';
import {
    Drawer,
    useTheme,
    SwipeableDrawer,
} from '../../Matlib';

import { DrawerSections } from '../../nodes/Drawer/Sections';
import { MobileSection } from '../../nodes/Drawer/MobileSection';

// styles
import { Styles } from '../../styles/AppDrawer';

export const Component = ({
    props,
    state,
    actions,
}) => {
    const styl = Styles();
    const theme = useTheme();
    const isLight = props.theme === "light";

    return (
        <div className={styl.root}>
            {
                theme.isMobile ?
                    <SwipeableDrawer
                        className={styl.drawer}
                        open={state.isMenuOpen}
                        onOpen={actions.ON_MENU_OPEN}
                        onClose={actions.ON_MENU_CLOSE}
                        classes={{ paper: styl.drawerPaperMobile }}
                    >
                        <MobileSection
                            history={props.history}
                            isLight={isLight}
                            {...state}
                        />
                    </SwipeableDrawer>
                    :
                    <Drawer
                        className={styl.drawer}
                        variant="permanent"
                        classes={{ paper: styl.drawerPaper }}
                    >
                        <div className={styl.toolbar} />
                        <DrawerSections history={props.history} {...state} />
                    </Drawer>
            }
        </div>
    );
}