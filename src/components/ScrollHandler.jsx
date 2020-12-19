import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollHandlerComponent extends React.Component {
        componentDidUpdate(prevProps) {
                if (this.props.location !== prevProps.location) {
                        document.getElementById("masterPage").scrollTo(0, 0);
                }
        }

        render() {
                return this.props.children
        }
}

export const ScrollHandler = withRouter(ScrollHandlerComponent)