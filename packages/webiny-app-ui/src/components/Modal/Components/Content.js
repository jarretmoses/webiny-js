import React from "react";
import classSet from "classnames";
import { createComponent } from "webiny-app";
import styles from "../styles.css?prefix=Modal";

class Content extends React.Component {
    render() {
        if (this.props.render) {
            return this.props.render.call(this);
        }

        const { styles } = this.props;
        return (
            <div className={classSet(styles.content, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

export default createComponent(Content, { styles });
