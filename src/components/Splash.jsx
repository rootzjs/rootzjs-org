import React from 'react';
import { ActionsSection } from '../nodes/Modules/Documentation/Actions';

export const Component = ({
    props,
    actions
}) => {

    React.useLayoutEffect(() => {
        actions.DISABLE_DRAWER();
    }, []);

    return <button onClick={() => {
        props.history.push("/Introduction");
    }}></button>
}