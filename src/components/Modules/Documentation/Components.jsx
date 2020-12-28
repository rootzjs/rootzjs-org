import React from 'react';
import { Typography } from '../../../Matlib';
import { Link } from '../Markdown/ExternalLink';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
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
            <div className={styl.pageTitle}>Components</div>
            <Typography variant="body1" gutterBottom>Rootz JS is a tiny library which makes it easier to solve problems related to state in your application. Before we start with the core concepts of Rootz in detail, let's take a look at a disciplined approach of how exactly Rootz helps in managing the state. To Implement Rootz, basic knowledge of JavaScript would do just fine.</Typography>
            
            <NavigationButton
                back="Thinking Rootz"
                next="Node"
            />
        </div>
    );
}
// rootz-app structure
const appStructure = `src/
    components/
        AddTodo.jsx
        TodoList.jsx
        FilterTodo.jsx
    nodes/
        AddTodo.js
        TodoList.js
        FilterTodo.js`;

const showMessageCode = `
import React from 'react';

const Component = ({
    props,
    state,
    actions,
    profile,
}) => {
	return (
    	<React.Fragment>
            <p>{state.message}</p>
            <button onClick={actions.ADD_MESSAGE}>Add Message</button>
        </React.Fragment>
    )
});
`;

const showMessageNode = `
import { createNode } from '@rootzjs/core';
import { Component } from '../components/showMessage';

const [node, dispatchNode] = createNode("ShowMessage", Component);

// define initial state of the node
node.state({ message: "" });

// create action for updating the state on btn click
node.useAction("ADD_MESSAGE", { message: "Yay! I just created my first Action" });

// dipatch Node with defined properties.
export const ShowMessage = dispatchNode(node);
`;