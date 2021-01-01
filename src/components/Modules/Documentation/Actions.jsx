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
            <Typography variant="body1" gutterBottom>In scenarios where <SelfLink name="async state update" route="/go-async" mask="Go Async"/> is required, the procedure in creating an action would remain the same. The only change required would be during its call. In such scenario the action would be called inside the promise.</Typography>
            <Typography variant="body1" gutterBottom>Let's take an example of async state update.</Typography>
            <div className={styl.codeHeadLabel}>components/AddTodoAsync.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoComponent}
            />
            <Typography variant="body1" gutterBottom>Here the format of creating and calling an action remains the same. Only for async state update, actions are called within a promise. </Typography>
            <div className={styl.codeHeadLabel}>nodes/AddTodoAsync.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoNode}
            />
            <Typography variant="body1" gutterBottom>In this case the <code>Actions</code> are kept pure, letting the component decide which action to be called on success / failure. There is another way you could approach the same problem by adding an API call within an action itself. <b>Actions with Async dependency</b>.</Typography>
            <div className={styl.contentSubTitle}>Actions with <code>Async Dependency</code></div>
            <Typography variant="body1" gutterBottom>This freedom of updating logic within an action, lets us write more <b>expressive async functions</b>. Where adding the API requests within an action <b>inverts the control from component to node</b>. This results in <b>call and forget</b> nature for a component. In this case the component wouldn't have to worry about it state update, the action would take care of it.</Typography>
            <NoteBlock content="It not only shifts the dependency on Node but also handle success / failure within the same action. This helps you to add specific behavior when you update the state." />
            <NoteBlock content="Either of this approach will provide same result. We still recommend you to use the later one for moving its dependency from the component. As all of its dependencies are handled by the node." type="info"/>
            <Typography variant="body1" gutterBottom>Let's take the same example to understand this.</Typography>
            <div className={styl.codeHeadLabel}>components/AddTodoAsync.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoComponent2}
            />
            <div className={styl.codeHeadLabel}>nodes/AddTodoAsync.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoNode2}
            />
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

const asyncAddTodoComponent = `
export const Component = (nodeProps) => {
    const { state, actions } = nodeProps;

    React.useEffect(() => {
        fetch("http://mockapi.com/todoapp/todos")
            .then(
                resp => actions.ADD_TODO(resp.data),
                err => actions.ERROR_FETCHING_TODOS(err)
            );
    }, [actions]);

    if(state.hasErrorFetchingTodos) {
        return <p>error fetching Todos...</p>
    } else {
        return { 
            /* CODE_FOR_DISPLAYING_TODOS */ 
        }
    }
}
`;

const asyncAddTodoNode = `
node.state({ 
    todos: [],
    hasErrorFetchingTodos: false
});

// existingTodos would be fetched through API
node.useAction("ADD_TODO", (state, [existingTodos]) => {
    return {
        todos: [
            ...state.todos,
            ...existingTodos
        ]
    }
});

// error fetching todos from API
node.useAction("ERROR_FETCHING_TODOS", { 
    hasErrorFetchingTodos: true 
});
`;

const asyncAddTodoComponent2 = `
export const Component = (nodeProps) => {
    const { state, actions } = nodeProps;

    React.useEffect(() => {
        actions.FETCH_TODOS();
    }, [actions]);

    if(state.hasErrorFetchingTodos) {
        return <p>error fetching Todos...</p>
    } else {
        return { 
            /* CODE_FOR_DISPLAYING_TODOS */ 
        }
    }
}
`;

const asyncAddTodoNode2 = `
node.state({ 
    todos: [],
    hasErrorFetchingTodos: false
});

// here the action decides what to be done on success / failure
node.useAction("FETCH_TODOS", (state, args) => {
    fetch("http://mockapi.com/todoapp/todos")
        .then(
            resp => { 
                return { 
                    todos: [
                        ...state.todos,
                        ...resp.data
                    ]
                }
            },
            err => {
                return {
                    hasErrorFetchingTodos: true
                }
            }
        );
});
`;