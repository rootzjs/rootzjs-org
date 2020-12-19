import React from 'react';
import {
        Switch,
        Tooltip,
        Brightness7Rounded,
        Brightness3Rounded,
} from '../../Matlib';

// styles
import { Styles } from "../../styles/AppHeader";

export const Component = ({
        props,
}) => {
        const styl = Styles();

        return (
                <Tooltip title={`toggle to ${props.isLight ? "dark" : "light"} theme`} >
                        <Switch
                                size="small"
                                color="primary"
                                checked={!props.isLight}
                                className={styl.checkbox}
                                onChange={props.onToggle}
                                icon={<Brightness3Rounded className={styl.themeTogglerDay} />}
                                checkedIcon={<Brightness7Rounded className={styl.themeTogglerNight} />}
                                classes={{
                                        track: styl.checkBoxTrack
                                }}
                        />
                </Tooltip>
        )
}