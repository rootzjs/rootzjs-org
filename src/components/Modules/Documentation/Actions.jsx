import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { Link } from '../Markdown/ExternalLink';
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
            <div className={styl.pageTitle}>Actions</div>
            <Typography variant="body1" gutterBottom>Actions describe the events occuring in an application. These events serves an intention to interact with the app and request changes. This means change in the existing state of the application. Rootz provides inbuilt <SelfLink name="boilerplate methods" route="/node" mask="Node" /> to create actions, which otherwise had to be created by the user.</Typography>
            <Typography variant="body1" gutterBottom>Actions should always return serializable plain objects. These objects are then merged to the existing state, forming a new updated state object. In simple ways actions are the modes of interaction with the application.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at what actions would look like <b>internally</b>.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunction}
            />
            <Typography variant="body1" gutterBottom>And this is how you would create one.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunctionCreate}
            />
            <Typography variant="body1" gutterBottom>In Rootz you wouldn't need to create the function definition by yourself, rather it provides inbuilt methods to create them. These methods not only help you create functions but also bind them to the <SelfLink name="NodeProps" route="/nodeprops" />.</Typography>
            <div className={styl.contentTitle}>Create Actions</div>
            <Typography variant="body1" gutterBottom>Some frameworks like <Link name="Redux" route="https://redux.js.org" /> allow users to explicitly define actions and reducers. Such solutions still generate redundant code and too much boilerplate to follow even for a simple state update. Under the hood this is handled by keeping things simple, by <SelfLink name="Actions" route="/actions" />. Although <b>Actions</b> are created implicitly, you get complete control over its logical definition. It not only provides standalone functionality, but also binds them to <SelfLink name="NodeProps" route="/nodeprops" /> without explicitly defining its mappings.</Typography>
            <Typography variant="body1" gutterBottom>There are two approaches to create them, <code>node.useAction</code> and <code>node.useActionCallback</code>. They both serve different purposes, incase if you want to update the state without any prior conditions you could use <SelfLink name="node.useActions" route="/node" mask="Node" />. This are <b>Pure Actions</b>. In case if condition arises where you need to generate the state based on inputs, you could use <SelfLink name="node.useActionsCallback" route="/node" mask="Node" />. This allows you to access the <code>state</code> variables and conditional parameters as arguments.</Typography>
            <NoteBlock content={`useActionCallback allows you to describe the update logic. You can access the current state of the Node as well as pass arguments for computing.`}/>
            <div className={styl.codeHeadLabel}>Pure Actions</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionCreate}
            />           
            <Typography variant="body1" gutterBottom>One with actions logic would appear like this.</Typography>
            <div className={styl.codeHeadLabel}>Actions with update logic</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunctionCreate}
            />
            <Typography variant="body1" gutterBottom>In the above example <code>state</code> is predefined as the first argument variable. While the parameters sent would result as an constructed array in the second argument, <code>TodoName</code>. This provides </Typography>
            <NoteBlock content="state, represents the current state of the Node. For example if the state of the Node is updated earlier, you would get the updated state as the argument."/>
            <div className={styl.contentTitle}>Create Async Actions</div>
            
            <NavigationButton
                back="NodeProps"
                next="Actions"
            />
        </div>
    );
}

const actionFunction = `
const ADD_TODO = (TodoName) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    };  
}
`;
;

const actionFunctionCreate = `
node.useAction("ADD_TODO", (state, [TodoName]) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    }
});
`;

const actionCreate = ` 
node.useAction("ADD_TODO", { 
    name: "Learn Rootz JS", completed: false 
}); 
`;