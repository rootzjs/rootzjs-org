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
            <div className={styl.pageTitle}>Structuring a Rootz App</div>
            <Typography variant="body1" gutterBottom>The essential requirement when it comes to the Rootz app is how to structure it with Rootz configuration. There is no single answer to it. We recommend to follow the below structure, although Rootz provides freedom to experiment with suitable structure for your application.</Typography>
            <CodeBlock
                lang="text"
                isLight={isLight}
                codeString={appStructure}
            />
            <div className={styl.contentSubTitle}>Nodes and Components</div>
            <Typography variant="body1" gutterBottom>Rootz segregates the functionalities for managing state from a React component. A component is the basic building block of any application. Thus the components can be created generically to extend its reusability. Components in Rootz handles the rendering part of the application. While the Node provides a character to a component making it dynamic in nature. </Typography>
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
            <NoteBlock content="Node is where the dynamic functionalities of a component is declared. A Component is where these functionalities are used, through NodeProps." key="Note" />
            <Typography variant="body1" gutterBottom>The Node <b>ShowMessage.js</b> clearly mentions the definition of the initial state of the message being <code>""</code> and the action <code>ADD_MESSAGE</code> which when called returns an updated state with a <code>"Yay! I just created my first Action"</code> message. </Typography>
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
                back="Thinking Rootz"
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

// dispatch Node with defined properties.
export const ShowMessage = dispatchNode(node);
`;