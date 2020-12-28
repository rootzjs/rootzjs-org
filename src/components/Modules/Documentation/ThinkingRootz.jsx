import React from 'react';
import { Typography } from '../../../Matlib';
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
            <div className={styl.pageTitle}>Thinking Rootz</div>
            <Typography variant="body1" gutterBottom>Rootz JS is a tiny library which makes it easier to solve problems related to state in your application. Before we start with the core concepts of Rootz in detail, let's take a look at a disciplined approach of how exactly Rootz helps in managing the state. To Implement Rootz, basic knowledge of JavaScript would do just fine.</Typography>
            <div className={styl.contentTitle}>Getting to know more...</div>
            <Typography variant="body1" gutterBottom>There are four key elements which one needs to be aware of for implementing rootz. More details on Rootz along with examples are covered in the
                <SelfLink
                    mask="Overview"
                    name="Workbook"
                    route="/overview"
                />
                section.
            </Typography>
            <div className={styl.contentSubTitle}>Node</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>A <SelfLink name="Node" route="/nodes" /> is a  </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>All nodes have a unique Id, called NODE_ID</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Each Node has it's own state which internally is a part of the Application Root.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>A React-Rootz application depicts a Root <i>(A Tree in DS terms)</i> with interconnected Nodes.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>An instance of Node provides helper methods to create <SelfLink name="Actions" route="/actions" /> and <SelfLink name="Contract" route="/contract" />.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Root</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>A Root is basically a tree <i>(in DS terms)</i>, which consists of state, actions, contract and the node component.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>The <SelfLink name="State" route="/state" /> of the Root is true to the application's current state, hence the only source of truth.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Actions</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom><SelfLink name="Actions" route="/actions" /> are functions which updates the state of the Node in which it is defined.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>An action should always return a JavaScript object.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>Actions are limited to the scope of the Node it is defined in.</Typography>
                </li>
            </ul>
            <div className={styl.contentSubTitle}>Contract</div>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom><SelfLink name="Contract" route="/contract" /> is an agreement made to update the state of a Node in the Application.</Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>A Contract is an Action by nature.</Typography>
                </li>
            </ul>
            <div className={styl.contentTitle}>Structuring a Rootz App</div>
            <Typography variant="body1" gutterBottom>The essential requirement when it comes to the Rootz app is how to structure it with Rootz configuration. There is no single answer to it. We recommend to follow the below structure, although Rootz provides freedom to experiment with suitable structure for your application.</Typography>
            <CodeBlock
                lang="text"
                isLight={isLight}
                codeString={appStructure}
            />
            <div className={styl.contentSubTitle}>Nodes and Components</div>
            <Typography variant="body1" gutterBottom>Rootz segregates the functionalities for managing state from a React component. A component is the basic building block of any application. Thus the components can be created generically to extend its reusability. Components in Rootz application handles the rendering part of the application. While the Node provides a character to a component making it dynamic in nature. </Typography>
            <NoteBlock content="We suggest decoupling the components and the nodes into respective folders. This extends the reusability of the components with other Nodes." key="Note" />
            <Typography variant="body1" gutterBottom>Let's take an example of a simple component.</Typography>
            <div className={styl.codeHeadLabel}>components/ShowMessage.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageCode}
            />
            <Typography variant="body1" gutterBottom>In the above example the component is a react component with pre-defined props. These props are known as <SelfLink name="NodeProps" route="/nodeprops" />. NodeProps helps in accessing the functionalities defined within a Node. The state and the actions used within the <b>ShowMessage.jsx</b> component is defined in its Node.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at the corresponding Node for <b>ShowMessage.jsx</b> component.</Typography>
            <div className={styl.codeHeadLabel}>node/ShowMessage.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageNode}
            />
            <NoteBlock content="Node is where the dynamic functionalities of a component is declared. A Component is where these functionalites are used, through NodeProps." key="Note" />
            <Typography variant="body1" gutterBottom>The Node <b>ShowMessage.js</b> clearly mentions the definition of the intial state of the message being <code>""</code> and the action <code>ADD_MESSAGE</code> which when called returns an updated state with a <code>"Yay! I just created my first Action"</code> message. </Typography>
            <Typography variant="body1" gutterBottom>More details on Rootz along with examples are covered in the
                <SelfLink
                    mask="Overview"
                    name="Workbook"
                    route="/overview"
                />
                section.
                You can refer <SelfLink name="Actions" route="/actions" /> and <SelfLink name="State" route="State" /> sections to know more about them.
            </Typography>
            <NavigationButton
                back="Installation"
                next="Components"
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