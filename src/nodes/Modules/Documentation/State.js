
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/State';

const [node, dispatchNode] = createNode("StateSection", Component);

export const StateSection = withRouter(dispatchNode(node));