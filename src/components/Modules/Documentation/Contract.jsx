import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { Link } from '../Markdown/ExternalLink';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";

    return (
        <div className={styl.root}>
            <div id="actions" className={styl.pageTitle}>Contract</div>
            
            <NavigationButton
                back="Actions"
                next="Profile"
            />
        </div>
    );
}