import { createNode } from '@rootzjs/core';
import { Component } from '../components/Master';

const [node, dispatchNode] = createNode("AppMaster", Component);

node.state({
        theme: "dark",
        errorDetails: "",
        isAuthenticated: false,
        didSomethingWentWrong: false,
});

// on Error
node.useAction(
        "ON_ERROR_OCCURED",
        (state, [err, stack]) => {
                return {
                        didSomethingWentWrong: true,
                        errorDetails: err || "error"
                };
        }
);

export const Master = dispatchNode(node);
