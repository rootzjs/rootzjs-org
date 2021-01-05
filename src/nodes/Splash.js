import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../components/Splash';

const [node, dispatchNode] = createNode("SplashPage", Component);

node.useContract("AppDrawer", "DISABLE_DRAWER", {
    isMenuOpen: false
})

export const SplashPage = withRouter(dispatchNode(node));
