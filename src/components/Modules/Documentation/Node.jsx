import React from 'react';
import { Typography } from '../../../Matlib';
import { Link } from '../Markdown/ExternalLink';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { EmbedSandbox } from '../Markdown/EmbedCode';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const embedComponentExample = `<iframe src="https://codesandbox.io/embed/rootzjs-concepts-example1-dyv6g?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FMaster.js&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-concepts-example1"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;

    return (
        <div className={styl.root}>
            <div className={styl.pageTitle}>Node</div>
            <Typography variant="body1" gutterBottom>A Node provides dynamic nature to a <SelfLink name="Components" route="/components" />. It provides functionality to define the initial state of the Node. This state is then passed as a parameter to the Component. Additionally a Node also provides functionalities to manage the change in state through actions and contract. Methods like <code>useAction</code> and <code>useContract</code> helps in managing the change in state of the Node.</Typography>
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={embedComponentExample} />
            <NavigationButton
                back="Components"
                next="NodeProps"
            />
        </div>
    );
}
//Nodes provides a dynamic nature Components in React-Rootz app 
const showMessageCode = `
import React from 'react';

/*
* @param: { props, state, actions, profile } nodeProps
* @type: NodeProps
* @proptype: Object
*/
export const Component = (nodeProps) => {
    const { props, state, actions, profile } = nodeProps;
	return (
	    {YOUR JSX ELEMENTS GOES HERE}
    )
});
`;

const showMessageClassCode = `
import React from 'react';

/*
* @param: { props, state, actions, profile } this.props
* @type: NodeProps
* @proptype: Object
*/
class Component extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            props,
            state,
            actions,
            profile,
        } = this.props;
        
        return (
            {YOUR JSX ELEMENTS GOES HERE}
        )
    }
} 
`;