
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/Components';

const [node, dispatchNode] = createNode("ComponentsSection", Component);

export const ComponentsSection = withRouter(dispatchNode(node));