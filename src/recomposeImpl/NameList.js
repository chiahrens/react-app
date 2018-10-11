import React from "react";
import styled from "styled-components";

const TrHead = styled.tr`
  background-color: #f200f2;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default ({ data, deleteUser }) => (
  <table width="700px">
    <tbody>
      <TrHead>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th />
      </TrHead>
      {data &&
        data.map(prop => (
          <Tr key={prop.id}>
            <td>{prop.id}</td>
            <td>{prop.firstName}</td>
            <td>{prop.lastName}</td>
            <td>
              <input
                id={prop.id}
                type="button"
                value="Delete"
                onClick={deleteUser}
              />
            </td>
          </Tr>
        ))}
    </tbody>
  </table>
);
