import React from "react";
import "./styles.css";
import "@nylas/components-email";

export class App extends React.Component {
  componentDidMount() {
    const email = document.getElementsByTagName("nylas-email")[0];
    email.addEventListener("manifestLoaded", function (e) {
      console.log("manifest loaded: ", e.detail);
    });
    email.addEventListener("threadClicked", function (e) {
      console.log("thread clicked: ", e.detail);
    });
    email.addEventListener("toggleThreadUnreadStatus", function (e) {
      console.log("thread unread status toggled: ", e.detail);
    });
    email.addEventListener("threadDeleted", function (e) {
      console.log("thread deleted: ", e.detail);
    });
    email.addEventListener("threadStarred", function (e) {
      console.log("thread starred: ", e.detail);
    });
    email.addEventListener("messageClicked", function (e) {
      console.log("message clicked: ", e.detail);
    });
    email.addEventListener("returnToMailbox", function (e) {
      console.log("reuturn to mailbox clicked: ", e.detail);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Nylas Email</h1>
        <nylas-email
        id="759a1f79-0467-4fd1-8f02-9384bd2ff31f"
        thread_id="we7ml80n6x9hjnlsohs2v658"
          show_star={true}
          show_contact_avatar="false"
          show_expanded_email_view_onload={true}
          click_action="default"
        ></nylas-email>
      </div>
    );
  }
}
