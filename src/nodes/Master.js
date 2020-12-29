import { createNode } from '@rootzjs/core';
import { Component } from '../components/Master';
import { getLangSupport } from '../lang';

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

node.setProfile({ ...getLangSupport("english") });

export const Master = dispatchNode(node);
