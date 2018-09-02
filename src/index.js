import React from "react";
import ReactDOM from "react-dom";
import { setNotificationSystem } from "./utility";
import Notification from "./Notification";
import Button from "./Button";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.setState(() => setNotificationSystem(this.notification));
  }

  render() {
    return (
      <div className="App">
        <h1>Notification Example</h1>
        <Button
          name="Info"
          color="rgb(0, 195, 255)"
          onClick={() =>
            this.notification.addNotification("Info: Hello World!", "info")
          }
        />{" "}
        <Button
          name="Success"
          color="rgb(69, 253, 100)"
          onClick={() =>
            this.notification.addNotification(
              "Success: Hello World!",
              "success"
            )
          }
        />{" "}
        <Button
          name="Warning"
          color="rgb(253, 189, 69)"
          onClick={() =>
            this.notification.addNotification(
              "Warning: Hello World!",
              "warning"
            )
          }
        />{" "}
        <Button
          name="Error"
          color="rgb(253, 69, 69)"
          onClick={() =>
            this.notification.addNotification("Error: Hello World!", "error")
          }
        />
        <Notification ref={instance => (this.notification = instance)} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
