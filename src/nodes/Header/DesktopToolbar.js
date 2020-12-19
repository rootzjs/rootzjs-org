import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Header/DesktopToolbar';

// create Node for App Header
const [node, dispatchNode] = createNode("DesktopToolbar", Component);

// dispatch Node
export const DesktopToolbar = dispatchNode(node);