import React from 'react';
import { Typography } from '../../../Matlib';
import { Link } from '../Markdown/ExternalLink';
import { CodeBlock } from '../Markdown/CodeBlock';
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
                        <div className={styl.pageTitle}>Introduction</div>
                        <Typography variant="body1" gutterBottom>Rootz JS is a centralized state management tool for React apps.</Typography>
                        <Typography variant="body1" gutterBottom>It follows a  <Link name="structural-functional" url="https://en.wikipedia.org/wiki/Structural_functionalism" /> paradigm, which sees your application as a set of Nodes interconnected through definitive set of actions, defined during the application building process. Each action defines the change of state of the Node it is written within or written for. All the Nodes abide by these actions resulting into expected application's behaviour.</Typography>
                        <Typography variant="body1" gutterBottom>This makes it easy to manage the state of your application. Another way of looking at this is, it helps you manage the data you display and how you respond to user actions. It helps you to view your application state as a whole at any point during application run.</Typography>
                        <Typography variant="body1" gutterBottom>Rootz, helps you write applications with complete hold over its state. This makes it possible for you to monitor changes happening at each component level. </Typography>
                        <Typography variant="body1" gutterBottom>Rootz is just over <Link name="2kb" url="https://www.npmjs.com/package/@rootzjs/core" />, including dependencies.</Typography>
                        <div className={styl.contentTitle}>Create a React-Rootz App</div>
                        <Typography variant="body1" gutterBottom>The recommeded way to use Rootz in a React application is by using the official <Link name="Rootz JS" url="https://github.com/rootzjs/cra-template-rootzjs" /> template for <Link name="create-react-app" url="https://github.com/facebook/create-react-app" />.</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={createRootzAppString}
                        />
                        <Typography variant="body1" gutterBottom>To install the core library with npm:</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={npmInstallRootzString}
                        />
                        <Typography variant="body1" gutterBottom>with yarn:</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={yarAddRootzString}
                        />
                        <div className={styl.contentTitle}>Why Rootz?</div>
                        <Typography variant="body1" gutterBottom>Rootz, provides a definitive structure to your application and its state, by which you achieve better lines of code (LOC) to behaviour ratio. This helps you to achieve expected behaviour of your application with minimal LOC. </Typography>
                        <Typography variant="body1" gutterBottom>The behaviour of the application is contributed by the
                                <SelfLink
                                        name="State"
                                        route="/state"
                                />
                        and the
                                <SelfLink
                                        name="Actions"
                                        route="/actions"
                                />
                        defined. States being a simple JavaScript object, while actions are result of built in boilerplate methods which concludes in ease of use with minimal learning curve.</Typography>
                        <div className={styl.contentTitle}>When to use Rootz?</div>
                        <Typography variant="body1" gutterBottom>Using Rootz is beneficial when:</Typography>
                        <ul>
                                <li>
                                        <Typography variant="body1" gutterBottom>Multiple components of an application has inter-component-state dependencies.</Typography>
                                </li>
                                <li>
                                        <Typography variant="body1" gutterBottom>Applications having reasonable data change / update over time.</Typography>
                                </li>
                                <li>
                                        <Typography variant="body1" gutterBottom>Scenario, where too much dependencies are imposed on a single component. Making it difficult to manage updates.</Typography>
                                </li>
                        </ul>
                        <Typography variant="body1" gutterBottom>Nevertheless Rootz can be used with any React Application, adopting any use cases. It not only manages the state but also helps in structuring the application for better long term maintainability and easy debugging. With just over 2KB (including dependencies) it contributes to benefit almost any application with performance constraints. </Typography>
                        <NavigationButton 
                                back=""
                                next="Installation"
                        />
                </div>
        );
}
// create-react-app
const createRootzAppString = "npx create-react-app my-app --template rootzjs";
// npm install rootz
const npmInstallRootzString = "npm install —-save @rootzjs/core";
// yarn add rootz
const yarAddRootzString = "yarn add --dev @rootzjs/core";