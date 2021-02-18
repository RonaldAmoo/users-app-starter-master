import React from "react";

class UserItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
}

export default UserItem;
