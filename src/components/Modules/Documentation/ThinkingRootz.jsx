import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';
import rootzAnatomy from '../../../assets/images/rootz-anatomy.svg';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";

    return (
        <div className={styl.root}>
            <div className={styl.pageTitle}>Thinking Rootz</div>
            <Typography variant="body1" gutterBottom>Rootz JS is a tiny library which makes it easier to solve problems related to state in your application. Before we start with the core concepts of Rootz in detail, let's take a look at a disciplined approach of how exactly Rootz helps in managing the state. To Implement Rootz, basic knowledge of JavaScript would do just fine.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a virtual tour on how a React-Rootz application would look like.</Typography>
            <img
                alt="logo"
                src={rootzAnatomy}
                className={styl.logo}
            />
            <Typography variant="body1" gutterBottom>These are the key elements which one needs to be aware of for understanding Rootz. Most of the boilerplate in Rootz is done by the Root Layer itself. Node controls the functionalities of the Component stored in Root. It directs the Component for its rendering outcome. Components are basically dumb in Rootz application. They normally behave the way Node directs them to. This way nature of the application is defined by how these Nodes interact with components. These interactions are carried out with Actions and Contract. They along with the state defines the nature of the Node which intern defines the behavior of the app.</Typography>
            <div className={styl.contentSubTitle}>Node</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>A <SelfLink name="Node" route="/nodes" /> is an interactive layer between the Component and the Root</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Each Node has Methods which helps in adding dynamic features to the component.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>These Methods are used in creating <SelfLink name="State" route="/state" />, <SelfLink name="Actions" route="/actions" />, <SelfLink name="Contract" route="/contract" /> and <SelfLink name="Profile" route="/profile" />.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>All nodes have a unique Id, called NODE_ID</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>A React-Rootz application is a tree with interconnected Nodes.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Root</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>A Root consists of the state container and Generators.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>State containers is where the state of all Nodes are stored.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Generators are of two types Action and Contract Generators.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>These generators helps in creating <SelfLink name="Actions" route="/actions" /> and <SelfLink name="Contract" route="/contract" />, which are responsible for updating the state.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>The <SelfLink name="State" route="/state" /> of the Root is true to the application's current state, hence the only source of truth.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Actions</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>An action helps in defining how a Component would be interacting to an Event.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom><SelfLink name="Actions" route="/actions" /> are functions which updates the state of the Node in which it is defined.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>An action should always return a JavaScript object.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Actions are limited to the scope of the Node it is defined in.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Actions are created using the Node methods.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Contract</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>A Contract helps in defining how other Components would interact to an Event.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom><SelfLink name="Contract" route="/contract" /> is an agreement made to update the state of a Node in the Application.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>A Contract is an Action by nature.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Contract too is created using Node methods.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Node Methods</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>Node Methods are functionalities by which Nodes interact with the Components.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>For Example, setting the initial state of a Node. or raising an action on an event.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Predefined Methods like, <code>state</code>, <code>useAction</code>, <code>useContract</code>, <code>setProfile</code> can be used based on situations.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Node Props</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom><SelfLink name="NodeProps" route="/nodeprops" /> are used in a component to access the defined Node Methods in Node.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Nodeprops consists of <code>props</code>, <code>state</code>, <code>actions</code> and <code>profile</code>.</Typography>
                </li>
            </ul>
            <NavigationButton
                back="Installation"
                next="App Structure"
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

// dispatch Node with defined properties.
export const ShowMessage = dispatchNode(node);
`;