import React, { Component } from "react";
import Wreck from "wreck";
import "./index.css";

class SimpleComponent extends Component {
  state = {
    data: []
  };

  constructor(){
    super();

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  getData(){
    Wreck.get("http://localhost:8080/person", { json: true }).then(res => {
      this.setState({data: res.payload});
    });
  }

  componentDidMount() {
    this.getData();
  }

  deleteUser(event) {
    Wreck.delete(`http://localhost:8080/person/${event.target.id}`, {
      json: true
    }).then(() => {
      this.getData();
    });
  }

  addUser() {
    Wreck.post("http://localhost:8080/person", {
      json: true,
      payload: { firstName: this.state.firstName, lastName: this.state.lastName }
    }).then(() => {
      this.getData();
    });
  }

  render() {
    return (
      <div>
        <table className="data" width="700px">
          <tbody>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th />
            </tr>
            {this.state.data &&
              this.state.data.map(prop => (
                <tr key={prop.id}>
                  <td>{prop.id}</td>
                  <td>{prop.firstName}</td>
                  <td>{prop.lastName}</td>
                  <td>
                    <input
                      id={prop.id}
                      type="button"
                      value="Delete"
                      onClick={this.deleteUser}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="add">
          <div>
            First Name:{" "}
            <input
              name="firstName"
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
          </div>
          <div>
            Last Name:{" "}
            <input
              name="lastName"
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </div>
          <div>
            <input type="button" value="Add" onClick={this.addUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleComponent;
