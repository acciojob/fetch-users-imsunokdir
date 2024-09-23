import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table-heading">
            <th>First Name</th>
            <th>last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => {
              return (
                <tr key={user.id} className="body-rows">
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td className="avatar">
                    <img src={user.avatar} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                <h3>No data found</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Table);
