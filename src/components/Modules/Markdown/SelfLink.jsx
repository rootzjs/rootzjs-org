import React from 'react';
import { Styles } from '../styles/Markdown';

export const Component = ({
        props,
        actions
}) => {
        const styl = Styles();
        return <a
                href
                className={styl.link}
                style={{ cursor: "pointer" }}
                onClick={() => actions.NAVIGATE_TO(props)}
        >
                {props.name}
        </a>
}