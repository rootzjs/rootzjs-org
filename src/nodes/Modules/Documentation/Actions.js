
import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Documentation/Actions';

const [node, dispatchNode] = createNode("ActionsSection", Component);

export const ActionsSection = dispatchNode(node);