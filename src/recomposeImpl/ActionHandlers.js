import { withHandlers } from "recompose";
import Wreck from "wreck";

const GetDataHandler = withHandlers({
  getData: ({ setData }) => () => {
    Wreck.get("http://localhost:8080/person", { json: true }).then(res => {
      setData(res.payload);
    });
  }
});

const AddUserHandler = withHandlers({
  addUser: ({ firstName, lastName, getData }) => () => {
    Wreck.post("http://localhost:8080/person", {
      json: true,
      payload: { firstName, lastName }
    }).then(() => {
      getData();
    });
  }
});

const DeleteUserHandler = withHandlers({
  deleteUser: ({ getData }) => event => {
    Wreck.delete(`http://localhost:8080/person/${event.target.id}`, {
      json: true
    }).then(() => {
      getData();
    });
  }
});

export { GetDataHandler, AddUserHandler, DeleteUserHandler };
