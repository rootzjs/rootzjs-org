import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Markdown/SelfLink';

const [node, dispatchNode] = createNode("SelfLink", Component);

// action to update #AppDrawer for current selected section
node.useContract(
        "AppDrawer",
        "NAVIGATE_TO",
        (state, [{ name, history, route, mask = false }]) => {
                history.push(route.toLowerCase().replace(/ /g, "-"));
                return { activeSection: mask || name }
        }
)

export const SelfLink = withRouter(dispatchNode(node));