import React from 'react';
import { IconButton } from '../../Matlib';

// styles
import { Styles } from "../../styles/AppHeader";

// images
import logo from '../../assets/images/logo.svg';
import titleLogo from '../../assets/images/title.svg';
import logoDark from '../../assets/images/logoDark.svg';
import titleLogoDark from '../../assets/images/titleDark.svg';

export const Component = ({
        props
}) => {
        const styl = Styles();
        const { isLight } = props;

        return (
                <React.Fragment>
                        <div className={styl.logoContainer}>
                                <IconButton className={styl.iconContainer} disabled>
                                        <img
                                                alt="logo"
                                                className={styl.logo}
                                                src={isLight ? logo : logoDark}
                                        />
                                        <img
                                                alt="logo"
                                                className={styl.logoTitle}
                                                src={isLight ? titleLogo : titleLogoDark}
                                        />
                                </IconButton>
                        </div>
                </React.Fragment>
        )
}