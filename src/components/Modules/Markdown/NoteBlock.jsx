import React from 'react';
import { Styles } from '../styles/Markdown';

// Notes
export const NoteBlock = ({ content }) => {
        const styl = Styles();
        return (
                <div className={styl.noteContainer}>
                        <span className={styl.noteLabel}>Note:</span>
                        <span className={styl.noteContent}>{content}</span>
                </div>
        )
}