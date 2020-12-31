
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/Actions';

const [node, dispatchNode] = createNode("ActionsSection", Component);

export const ActionsSection = withRouter(dispatchNode(node));