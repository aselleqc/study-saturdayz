import React, { Component } from "react";

export default class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    //what do we doooo...
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { firstname, lastname, email } = this.state;
    // axios.post("/here?", { firstname, lastname, email });
    this.setState({
      //after submit clears everything to empty string again
      firstname: "",
      lastname: "",
      email: ""
    });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <form id="form">
          <label>
            Firstname:
            <input
              type="text"
              name="firstname"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>

          <button onClick={this.handleSubmit}>submit</button>
          {/* only activates when the click is on i.e. onClick */}
        </form>
      </div>
    );
  }
}