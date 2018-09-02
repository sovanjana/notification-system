import React from "react";
import classnames from "classnames";

import "./Notification.css";

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: "",
      level: "info"
    };
  }

  show() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 3000);
  }

  addNotification(message, level) {
    this.setState({ message, level });
    this.show();
  }

  render() {
    return (
      <div
        className={classnames(
          "notification",
          { show: this.state.show },
          this.state.level
        )}
      >
        <p className="m-0">{this.state.message}</p>
      </div>
    );
  }
}
