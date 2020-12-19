import React from 'react';
import { Styles } from '../styles/Markdown';

// Link Tag
export const Link = ({ name, url }) => {
        const styl = Styles();
        return <a className={styl.link} href={url}>{name}</a>
}