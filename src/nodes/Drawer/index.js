import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../components/Drawer';

const [node, dispatchNode] = createNode("AppDrawer", Component);

node.state({
        isMenuOpen: false,
        activeSection: "Introduction",
        sections: [
                {
                        id: "Getting Started",
                        subSections: [
                                "Introduction",
                                "Installation",
                                "Thinking Rootz",
                        ]
                },
                {
                        id: "Concepts",
                        subSections: [
                                "Components",
                                "Node",
                                "NodeProps",
                                "State",
                                "Actions",
                                "Contract",
                                "Profile"
                        ]
                },
                {
                        id: "Workbook",
                        subSections: [
                                "Overview",
                                "App Structure",
                                "App Flow",
                                "Go Async",
                                "With Data",
                                "Performance"
                        ]
                },
        ],
        comminSoon: [
                "Impact",
                "Timelines"
        ],
});

// on menu open
node.useAction(
        "ON_MENU_OPEN",
        { isMenuOpen: true }
);

// on menu close
node.useAction(
        "ON_MENU_CLOSE",
        { isMenuOpen: false }
);

export const AppDrawer = withRouter(dispatchNode(node));