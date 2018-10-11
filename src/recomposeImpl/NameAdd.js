import React from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import { AddUserHandler } from "./ActionHandlers";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5px;
  margin: 5px;
`;

const BaseComponent = ({ updateFirstName, updateLastName, addUser }) => (
  <Div>
    <div>
      First Name: <input name="firstName" onChange={event => updateFirstName(event.target.value)} />
    </div>
    <div>
      Last Name: <input name="lastName" onChange={event => updateLastName(event.target.value)} />
    </div>
    <div>
      <input type="button" value="Add" onClick={addUser} />
    </div>
  </Div>
);

export default compose(
  withState("firstName", "updateFirstName"),
  withState("lastName", "updateLastName"),
  AddUserHandler
)(BaseComponent);
