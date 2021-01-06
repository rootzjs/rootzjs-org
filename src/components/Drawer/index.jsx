import React from 'react';
import {
    Drawer,
    useTheme,
    SwipeableDrawer,
} from '../../Matlib';

// styles
import { Styles } from '../../styles/AppDrawer';

const DrawerSections = React.lazy(() => import('../../nodes/Drawer/Sections'));
const MobileSection = React.lazy(() => import('../../nodes/Drawer/MobileSection'));

export const Component = ({
    props,
    state,
    actions,
}) => {
    const styl = Styles();
    const theme = useTheme();
    const isLight = props.theme === "light";
    const isSplashPage = props.history.location.pathname === "/";

    React.useLayoutEffect(() => {
        const pathSection = props.history.location.pathname
            .replace(/\//g, "")
            .replace(/-/g, " ")
            .toLowerCase();
        const needsRouteCorrection = pathSection !== state.activeSection.toLowerCase();
        if (needsRouteCorrection) {
            actions.ROUTE_CORRECTION(pathSection);
        }
    }, [
        actions,
        state.activeSection,
        props.history.location.pathname,
    ]);

    if (isSplashPage) {
        return <React.Fragment></React.Fragment>
    }
    else {
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
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <MobileSection
                                    history={props.history}
                                    isLight={isLight}
                                    {...state}
                                />
                            </React.Suspense>
                        </SwipeableDrawer>
                        :
                        <Drawer
                            variant="permanent"
                            className={styl.drawer}
                            classes={{ paper: styl.drawerPaper }}
                        >
                            <div className={styl.toolbar} />
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <DrawerSections history={props.history} {...state} />
                            </React.Suspense>
                        </Drawer>
                }
            </div>
        );
    }
}