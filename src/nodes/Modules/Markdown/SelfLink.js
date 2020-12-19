import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Markdown/SelfLink';

const [node, dispatchNode] = createNode("SelfLink", Component);

// action to update #AppDrawer for current selected section
node.useContract(
        "AppDrawer",
        "NAVIGATE_TO",
        (state, [{ name, history, route }]) => {
                history.push(route);
                return { activeSection: name }
        }
)

export const SelfLink = withRouter(dispatchNode(node));