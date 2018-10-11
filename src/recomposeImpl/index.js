import React from "react";
import { compose, lifecycle, withState } from "recompose";
import { GetDataHandler, DeleteUserHandler } from "./ActionHandlers";
import NameList from "./NameList";
import NameAdd from "./NameAdd";

const BaseComponent = ({ data, getData, deleteUser }) => (
  <div>
    <NameList data={data} deleteUser={deleteUser}/>
    <NameAdd getData={getData} />
  </div>
);

export default compose(
  withState("data", "setData"),
  GetDataHandler,
  DeleteUserHandler,
  lifecycle({
    componentDidMount() {
      this.props.getData();
    }
  })
)(BaseComponent);
